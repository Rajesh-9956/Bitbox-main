import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import profileContext from '../context/profileContext';
import userDummyImg from '../assets/images/User/User.png'
// CSS removed for tailwind

const EditProfile = (props) => {
    const host = 'http://localhost:5000'
    const userProfileContext = useContext(profileContext);
    const { updateUserProfile } = userProfileContext;

    const [profile, setProfile] = useState({ name: '', college: '', phone: '', address: '' });

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClick();
        }
    }

    const onChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleClick = async () => {
        try {
            updateUserProfile(profile.name, profile.college, profile.phone, profile.address);
            setProfile({ name: "", college: "", phone: "", address: "" });
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageData = reader.result;
                axios.post(`${host}/uploadAvatarImage`, { image: imageData })
                    .then(res => {
                        console.log(res)
                        // After successful upload, fetch the updated image
                        axios.get(`${host}/getAvatarImage`)
                            .then(res => setImage(res.data[res.data.length - 1].image)) // Fetch the last uploaded image
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            }
            reader.readAsDataURL(file);
            props.showAlert("Profile Updated Successfully", "success");
        } catch (error) {
            props.showAlert("Profile Updated Failed", "danger");
        }
    };

    // For Avatar Uploading 
    const [file, setFile] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        // Fetch initial image when component mounts
        axios.get(`{host}/getAvatarImage`)
            .then(res => setImage(res.data[res.data.length - 1].image)) // Fetch the last uploaded image
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={`min-h-screen pt-24 pb-12 font-sans relative overflow-hidden flex items-center justify-center ${props.mode === 'dark' ? 'bg-[#05050A] text-white' : 'bg-[#f8fafc] text-gray-900'}`}>
            
            {/* Background Effects */}
            {props.mode === 'dark' && (
                <>
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                </>
            )}

            <div className="w-full max-w-5xl px-4 sm:px-6 relative z-10 animate-fade-in-up">
                <div className={`flex flex-col md:flex-row gap-8 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden ${props.mode === 'dark' ? 'bg-[#151525]/80 backdrop-blur-xl border border-gray-800' : 'bg-white border border-gray-100'}`}>
                    
                    {/* Left Panel: Avatar Upload */}
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center space-y-6">
                        <h2 className={`text-2xl font-extrabold ${props.mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>Edit Photo</h2>
                        <div className={`relative w-40 h-40 rounded-full p-1.5 shadow-2xl transition-transform hover:scale-105 ${props.mode === 'dark' ? 'bg-[#0B0B13] border-2 border-indigo-500/30 hover:border-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.2)]' : 'bg-indigo-50 border-2 border-indigo-200'}`}>
                            {image ? (
                                <img src={image} className="w-full h-full object-cover rounded-full" alt="avatar" />
                            ) : (
                                <img src={userDummyImg} className="w-full h-full object-cover rounded-full" alt="avatar" />
                            )}
                            <label className="absolute bottom-0 right-0 p-3 rounded-full bg-indigo-600 cursor-pointer hover:bg-indigo-500 transition-colors shadow-lg border-2 border-[#151525]">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <input type="file" className="hidden" accept="image/*" onChange={e => setFile(e.target.files[0])} />
                            </label>
                        </div>
                        <p className={`text-sm ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Allowed formats: JPG, PNG. Max size: 2MB.</p>
                    </div>

                    {/* Divider */}
                    <div className={`hidden md:block w-px h-auto mx-4 ${props.mode === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}></div>

                    {/* Right Panel: Info Form */}
                    <div className="w-full md:w-2/3">
                        <div className="mb-8">
                            <h2 className="text-3xl font-extrabold mb-2 tracking-tight">Personal <span className="text-gradient">Info</span></h2>
                            <p className={props.mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}>Update your personal details below.</p>
                        </div>

                        <div className="space-y-5">
                            <div className="group">
                                <label htmlFor="name" className={`block text-sm font-bold mb-2 uppercase tracking-wide ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Full Name</label>
                                <input autoFocus type="text" id="name" name='name' value={profile.name} onChange={onChange} required onKeyDown={handleKeyDown} placeholder="Enter your full name" className={`w-full px-4 py-3 rounded-xl transition-all outline-none focus:ring-2 focus:ring-indigo-500 ${props.mode === 'dark' ? 'bg-[#0B0B13] border border-gray-800 focus:border-indigo-500 text-white placeholder-gray-600' : 'bg-gray-50 border border-gray-200 focus:border-indigo-400 text-gray-900'}`} />
                            </div>

                            <div className="group">
                                <label htmlFor="address" className={`block text-sm font-bold mb-2 uppercase tracking-wide ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Address</label>
                                <input type="text" id="address" name='address' value={profile.address} onChange={onChange} required onKeyDown={handleKeyDown} placeholder="Enter your address" className={`w-full px-4 py-3 rounded-xl transition-all outline-none focus:ring-2 focus:ring-indigo-500 ${props.mode === 'dark' ? 'bg-[#0B0B13] border border-gray-800 focus:border-indigo-500 text-white placeholder-gray-600' : 'bg-gray-50 border border-gray-200 focus:border-indigo-400 text-gray-900'}`} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="group">
                                    <label htmlFor="college" className={`block text-sm font-bold mb-2 uppercase tracking-wide ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>College</label>
                                    <input type="text" id="college" name='college' value={profile.college} onChange={onChange} required onKeyDown={handleKeyDown} placeholder="Enter your college" className={`w-full px-4 py-3 rounded-xl transition-all outline-none focus:ring-2 focus:ring-indigo-500 ${props.mode === 'dark' ? 'bg-[#0B0B13] border border-gray-800 focus:border-indigo-500 text-white placeholder-gray-600' : 'bg-gray-50 border border-gray-200 focus:border-indigo-400 text-gray-900'}`} />
                                </div>

                                <div className="group">
                                    <label htmlFor="phone" className={`block text-sm font-bold mb-2 uppercase tracking-wide ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Phone</label>
                                    <input type="text" id="phone" name='phone' value={profile.phone} onChange={onChange} required onKeyDown={handleKeyDown} placeholder="Enter phone number" className={`w-full px-4 py-3 rounded-xl transition-all outline-none focus:ring-2 focus:ring-indigo-500 ${props.mode === 'dark' ? 'bg-[#0B0B13] border border-gray-800 focus:border-indigo-500 text-white placeholder-gray-600' : 'bg-gray-50 border border-gray-200 focus:border-indigo-400 text-gray-900'}`} />
                                </div>
                            </div>

                            <div className="pt-4">
                                <button type="button" onClick={handleClick} className={`w-full py-4 rounded-xl font-bold text-lg tracking-wide transition-all transform hover:-translate-y-1 active:translate-y-0 active:shadow-none ${props.mode === 'dark' ? 'bg-indigo-600 text-white shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:bg-indigo-500 hover:shadow-[0_15px_30px_rgba(79,70,229,0.4)] border-b-4 border-indigo-800' : 'bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 border-b-4 border-indigo-800'}`}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

EditProfile.propTypes = {
    showAlert: PropTypes.func,
    mode: PropTypes.string,
    onUpdateProfile: PropTypes.func, // Function to notify parent about profile update
};
export default EditProfile;
