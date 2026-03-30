import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

const host = "http://localhost:5000";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    // To not Reload after click submit 
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Logged in Successfully", "success")
      navigate("/");
    }
    else {
      props.showAlert("Invalid Credentials", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className={`min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${props.mode === 'dark' ? 'bg-[#05050A] text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Background Orbs */}
      {props.mode === 'dark' && (
        <>
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-indigo-600/20 blur-[130px] animate-pulse-glow pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full bg-fuchsia-600/15 blur-[120px] animate-float-delayed pointer-events-none"></div>
        </>
      )}

      <div className={`w-full max-w-md p-8 md:p-10 rounded-[2.5rem] relative z-10 animate-slide-up sm:mx-4 ${props.mode === 'dark' ? 'card-3d bg-[#151525]' : 'bg-white shadow-2xl border border-gray-100'}`}>
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">Welcome Back</h2>
            <p className={`font-medium ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Sign in to your Bitbox account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className={`text-sm font-bold tracking-wide uppercase ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiMail className={props.mode === 'dark' ? 'text-gray-500' : 'text-gray-400'} />
                </div>
                <input type="email" required className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 focus:ring-4 transition-all outline-none font-medium ${props.mode === 'dark' ? 'bg-[#0B0B13] border-gray-800 focus:border-indigo-500 focus:ring-indigo-500/20 text-white placeholder-gray-600 focus:shadow-neon' : 'bg-gray-50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-100 text-gray-900'}`} placeholder="name@company.com" value={credentials.email} onChange={onChange} id="email" name="email" autoComplete="email" />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={`text-sm font-bold tracking-wide uppercase ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Password</label>
                <a href="#" className="font-semibold text-sm text-indigo-500 hover:text-indigo-400 transition-colors">Forgot Password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiLock className={props.mode === 'dark' ? 'text-gray-500' : 'text-gray-400'} />
                </div>
                <input type="password" required className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 focus:ring-4 transition-all outline-none font-medium ${props.mode === 'dark' ? 'bg-[#0B0B13] border-gray-800 focus:border-indigo-500 focus:ring-indigo-500/20 text-white placeholder-gray-600 focus:shadow-neon' : 'bg-gray-50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-100 text-gray-900'}`} id="password" placeholder="••••••••" value={credentials.password} onChange={onChange} name="password" autoComplete="current-password" />
              </div>
            </div>

            <button type="submit" className={`w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-extrabold text-lg transition-all ${props.mode === 'dark' ? 'bg-indigo-600 text-white btn-3d' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl hover:-translate-y-1'}`}>
              Sign in <FiArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className={`font-medium ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Don't have an account?{' '}
              <Link to="/Signup" className="font-bold text-indigo-500 hover:text-indigo-400 transition-colors">Sign up</Link>
            </p>
            {/* <span className="title">Or Sign in with</span> */}
            {/* <div className="social-accounts">
              <button className="social-button google">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" fill="#4285F4"></path>
                </svg>
              </button>
              <button className="social-button apple">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" fill="#181717"></path>
                </svg>
              </button>
              <button className="social-button twitter">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="#1DA1F2"></path>
                </svg>
              </button>
            </div> */}
          </div>
        </div>
    </div>
  )
}

// Props Vadilation
Login.propTypes = {
  showAlert: PropTypes.func,
};

export default Login