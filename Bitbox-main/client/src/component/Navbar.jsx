import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import AddProject from './AddProject';
import logo from '../assets/images/logo.png';
import avatarDropdown from '../assets/images/Dropdown/avatar.png';
import { auth } from '../component/Firebase/Setup';
import { FiMenu, FiX, FiSun, FiMoon, FiLogOut, FiUser, FiSettings } from 'react-icons/fi';

function Navbar(props) {
    const host = "http://localhost:5000";
    const navigate = useNavigate();
    const location = useLocation();
    const { showAlert, mode } = props;
    
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Mobile menu
    const [profileOpen, setProfileOpen] = useState(false); // Profile dropdown
    const [image, setImage] = useState();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        axios.get(`${host}/getAvatarImage`)
            .then(res => setImage(res.data[res.data.length - 1]?.image))
            .catch(err => console.log(err));
    }, []);

    const renderUploadButton = () => {
        if (location.pathname === '/myprofile') {
            return <AddProject mode={mode} showAlert={showAlert} />;
        }
        return null;
    };

    const handleLogout = async () => {
        try {
            await auth.signOut();
            localStorage.removeItem('token');
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };

    const navLinks = [
        { name: props.home || 'Home', path: '/' },
        { name: 'Features', path: '/community' },
        { name: props.about || 'About', path: '/about' },
        { name: 'Services', path: '/discussion' },
        { name: 'Contact', path: '/contactus' }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${isScrolled ? (mode === 'dark' ? 'glass-neon py-3 shadow-neon' : 'glass py-3 shadow-lg') : 'bg-transparent py-6'} ${mode === 'dark' ? 'text-white' : 'text-gray-900 border-none'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className={`p-2 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-lg ${mode === 'dark' ? 'bg-[#0A0A1F] border border-indigo-500/50 shadow-indigo-500/30' : 'bg-indigo-600/10'}`}>
                            <img src={logo} alt="logo" className="w-8 h-8 object-contain drop-shadow-lg" style={{ filter: mode === 'dark' ? 'invert(1)' : 'none' }} />
                        </div>
                        <span className="font-bold text-xl tracking-tight hidden sm:block">
                            {props.title}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-6 text-sm font-medium">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link 
                                        to={link.path} 
                                        className={`transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-800/50 ${location.pathname === link.path ? (mode === 'dark' ? 'text-indigo-400 font-bold bg-[#0A0A1F] border border-indigo-500/30 shadow-neon' : 'text-indigo-600 font-bold bg-indigo-50') : 'hover:text-indigo-400'}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center space-x-4 border-l border-gray-300 dark:border-gray-700 pl-4">
                            {/* Dark Mode Toggle */}
                            <button 
                                onClick={props.toggleMode}
                                className={`p-2.5 rounded-xl transition-all duration-300 focus:outline-none shadow-md ${mode === 'dark' ? 'bg-[#0B0B13] border border-indigo-500/30 hover:border-indigo-400 shadow-indigo-500/20 hover:scale-110' : 'bg-gray-100 hover:bg-gray-200'}`}
                                aria-label="Toggle Dark Mode"
                            >
                                {mode === 'dark' ? <FiMoon className="w-5 h-5 text-indigo-400" /> : <FiSun className="w-5 h-5 text-amber-500" />}
                            </button>

                            {/* Auth / Profile */}
                            {!localStorage.getItem('token') ? (
                                <div className="flex items-center space-x-3">
                                    <Link to="/login" className="px-5 py-2.5 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-white transition-colors bg-white/5 dark:bg-[#0A0A1F] border border-gray-200 dark:border-indigo-900/50 rounded-xl hover:border-indigo-500/50 hover:bg-indigo-900/20">
                                        Login
                                    </Link>
                                    <Link to="/signup" className="px-6 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-xl border border-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:bg-indigo-500 hover:shadow-[0_0_25px_rgba(79,70,229,0.7)] transition-all btn-3d">
                                        Get Started
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex items-center gap-3 relative">
                                    {renderUploadButton()}
                                    <button 
                                        onClick={() => setProfileOpen(!profileOpen)}
                                        className={`relative rounded-xl focus:outline-none overflow-hidden w-11 h-11 border-2 transition-all hover:scale-110 shadow-lg ${mode === 'dark' ? 'border-indigo-500/50 shadow-neon' : 'border-indigo-200'}`}
                                    >
                                        <img 
                                            src={image || avatarDropdown} 
                                            className="w-full h-full object-cover" 
                                            alt="avatar" 
                                        />
                                    </button>
                                    
                                    {/* Profile Dropdown */}
                                    {profileOpen && (
                                        <div className="absolute right-0 top-12 mt-2 w-48 rounded-xl shadow-xl py-1 glass dark:glass-dark ring-1 ring-black ring-opacity-5 animate-fade-in z-50">
                                            <Link to="/myprofile" className="flex items-center px-4 py-2 text-sm hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors" onClick={() => setProfileOpen(false)}>
                                                <FiUser className="w-4 h-4 mr-2 text-indigo-500" /> My Profile
                                            </Link>
                                            <Link to="/editprofile" className="flex items-center px-4 py-2 text-sm hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors" onClick={() => setProfileOpen(false)}>
                                                <FiSettings className="w-4 h-4 mr-2 text-indigo-500" /> Edit Profile
                                            </Link>
                                            <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                                            <button onClick={() => { handleLogout(); setProfileOpen(false); }} className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-gray-800 transition-colors text-left">
                                                <FiLogOut className="w-4 h-4 mr-2" /> Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button 
                            onClick={props.toggleMode}
                            className={`p-2.5 rounded-xl transition-all duration-300 shadow-md ${mode === 'dark' ? 'bg-[#0B0B13] border border-indigo-500/30 hover:shadow-neon' : 'bg-gray-100'}`}
                        >
                            {mode === 'dark' ? <FiMoon className="w-5 h-5 text-indigo-400" /> : <FiSun className="w-5 h-5 text-amber-500" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2.5 rounded-xl w-11 h-11 focus:outline-none transition-all shadow-md ${mode === 'dark' ? 'bg-[#0B0B13] border border-indigo-500/30 text-indigo-400' : 'bg-gray-100 text-gray-800'}`}
                        >
                            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass dark:glass-dark border-t border-gray-200 dark:border-gray-800 animate-slide-up shadow-xl absolute w-full top-full left-0 origin-top">
                    <div className="px-4 py-4 space-y-2 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-xl text-base font-medium ${location.pathname === link.path ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' : 'hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
                            {!localStorage.getItem('token') ? (
                                <div className="flex flex-col space-y-3">
                                    <Link to="/login" onClick={() => setIsOpen(false)} className={`w-full text-center px-4 py-3 rounded-xl font-bold transition-all shadow-md ${mode === 'dark' ? 'bg-[#0A0A1F] border border-indigo-500/50 text-gray-300 hover:shadow-neon hover:text-white' : 'border border-gray-300 hover:bg-gray-50'}`}>
                                        Login
                                    </Link>
                                    <Link to="/signup" onClick={() => setIsOpen(false)} className="w-full text-center px-4 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 shadow-lg shadow-indigo-500/50 transition-all btn-3d">
                                        Get Started
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-center gap-3 px-3 mb-2">
                                        <img src={image || avatarDropdown} alt="avatar" className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600" />
                                        <div className="flex flex-col">
                                            <span className="font-medium text-sm">My Account</span>
                                            <span className="text-xs text-green-500 font-medium">Logged in</span>
                                        </div>
                                    </div>
                                    <Link to="/myprofile" onClick={() => setIsOpen(false)} className="flex items-center px-4 py-3 rounded-xl text-base hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"><FiUser className="w-4 h-4 mr-3" /> My Profile</Link>
                                    <Link to="/editprofile" onClick={() => setIsOpen(false)} className="flex items-center px-4 py-3 rounded-xl text-base hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"><FiSettings className="w-4 h-4 mr-3" /> Edit Profile</Link>
                                    <button onClick={() => { handleLogout(); setIsOpen(false); }} className="flex w-full items-center px-4 py-3 rounded-xl text-base text-red-600 hover:bg-red-50 dark:hover:bg-gray-800 transition-colors">
                                        <FiLogOut className="w-4 h-4 mr-3" /> Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string,
    community: PropTypes.string,
    discussion: PropTypes.string,
    myProjects: PropTypes.string,
    about: PropTypes.string,
    mode: PropTypes.string,
    toggleMode: PropTypes.func,
    showAlert: PropTypes.func,
};

export default Navbar;
