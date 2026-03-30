import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
// import { auth } from '../component/Firebase/Setup';
const host = "http://localhost:5000";

const Signup = (props) => {
  // const [value, setValue] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   setValue(localStorage.getItem('email'));
  // }, []);

  // const handleClick = async () => {
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     const { user } = await signInWithPopup(auth, provider);
  //     const email = user.email;
  //     const password = ''; // You won't get the password from Google authentication
  //     const name = ''; // You might not get the name from Google authentication
  //     // Perform signup with Google email
  //     await signUpWithGoogle(email, name, password);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const signUpWithGoogle = async (email, name, password) => {
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      navigate("/"); // Redirect to home page after successful sign-up
      props.showAlert("Account Created Successfully", "success")
    } else {
      props.showAlert("Invalid Details", "danger")
    }
  };

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = credentials;

    // Perform signup with email and password
    await signUpWithGoogle(email, name, password);
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className={`min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${props.mode === 'dark' ? 'bg-[#05050A] text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Background Orbs */}
      {props.mode === 'dark' && (
        <>
            <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-cyan-600/20 blur-[130px] animate-pulse-glow pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full bg-indigo-600/15 blur-[120px] animate-float-delayed pointer-events-none"></div>
        </>
      )}

      <div className={`w-full max-w-lg p-8 md:p-10 rounded-[2.5rem] relative z-10 animate-slide-up sm:mx-4 ${props.mode === 'dark' ? 'card-3d bg-[#151525]' : 'bg-white shadow-2xl border border-gray-100'}`}>
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">Create Account</h2>
            <p className={`font-medium ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Join the Bitbox community today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className={`text-sm font-bold tracking-wide uppercase ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiUser className={props.mode === 'dark' ? 'text-gray-500' : 'text-gray-400'} />
                </div>
                <input type="text" required className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 focus:ring-4 transition-all outline-none font-medium ${props.mode === 'dark' ? 'bg-[#0B0B13] border-gray-800 focus:border-cyan-500 focus:ring-cyan-500/20 text-white placeholder-gray-600 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'bg-gray-50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-100 text-gray-900'}`} placeholder="John Doe" value={credentials.name} onChange={onChange} id="name" name="name" autoComplete="name" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className={`text-sm font-bold tracking-wide uppercase ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiMail className={props.mode === 'dark' ? 'text-gray-500' : 'text-gray-400'} />
                </div>
                <input type="email" required className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 focus:ring-4 transition-all outline-none font-medium ${props.mode === 'dark' ? 'bg-[#0B0B13] border-gray-800 focus:border-cyan-500 focus:ring-cyan-500/20 text-white placeholder-gray-600 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'bg-gray-50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-100 text-gray-900'}`} placeholder="name@company.com" value={credentials.email} onChange={onChange} id="email" name="email" autoComplete="email" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="password" className={`text-sm font-bold tracking-wide uppercase ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FiLock className={props.mode === 'dark' ? 'text-gray-500' : 'text-gray-400'} />
                    </div>
                    <input type="password" required className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 focus:ring-4 transition-all outline-none font-medium ${props.mode === 'dark' ? 'bg-[#0B0B13] border-gray-800 focus:border-cyan-500 focus:ring-cyan-500/20 text-white placeholder-gray-600 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'bg-gray-50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-100 text-gray-900'}`} id="password" placeholder="••••••••" value={credentials.password} onChange={onChange} name="password" minLength={5} autoComplete="new-password" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="cpassword" className={`text-sm font-bold tracking-wide uppercase ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Confirm</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FiLock className={props.mode === 'dark' ? 'text-gray-500' : 'text-gray-400'} />
                    </div>
                    <input type="password" required className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 focus:ring-4 transition-all outline-none font-medium ${props.mode === 'dark' ? 'bg-[#0B0B13] border-gray-800 focus:border-cyan-500 focus:ring-cyan-500/20 text-white placeholder-gray-600 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'bg-gray-50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-100 text-gray-900'}`} id="cpassword" placeholder="••••••••" value={credentials.cpassword} onChange={onChange} name="cpassword" minLength={5} autoComplete="new-password" />
                  </div>
                </div>
            </div>

            <button type="submit" className={`w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-extrabold text-lg transition-all mt-4 ${props.mode === 'dark' ? 'bg-cyan-600 text-white btn-3d' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl hover:-translate-y-1'}`}>
              Sign Up <FiArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className={`font-medium ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Already have an account?{' '}
              <Link to="/Login" className="font-bold text-cyan-500 hover:text-cyan-400 transition-colors">Sign in</Link>
            </p>
          </div>
        </div>
    </div>
  )
}

// Props Validation
Signup.propTypes = {
  showAlert: PropTypes.func,
};

export default Signup;
