import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/images/logo.png';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer(props) {
  return (
    <footer className="bg-[#05050A] border-t border-indigo-900/40 relative overflow-hidden pt-16 pb-8 text-gray-300 font-sans mt-auto">
      {/* Abstract Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="bg-[#0B0B13] border border-indigo-500/20 p-2.5 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] shadow-md">
                 <img src={logo} alt="logo" className="w-10 h-10 object-contain drop-shadow-lg" />
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-white font-sans text-shadow-neon">BIT<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">BOX</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Where Projects Find Solutions Together. Join our vibrant community, share knowledge, and let's shape the future of digital exchange together.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span> About Bitbox
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm font-medium">Community Projects</Link></li>
              <li><Link to="/contactus" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm font-medium">Contact Us</Link></li>
              <li><Link to="/codeofconduct" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm font-medium">Code of Conduct</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
             <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span> Legal
            </h3>
            <ul className="space-y-3">
              <li><Link to="/feedback" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium">Feedback</Link></li>
              <li><Link to="/privacypolicy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium">Privacy Policy</Link></li>
              <li><Link to="/termofuse" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
             <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Connect
            </h3>
            <div className="flex flex-col space-y-4">
                <a href="https://github.com/bitboxcommunity" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-all hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] group w-fit">
                  <div className="p-2 rounded-xl bg-[#0B0B13] border border-gray-800 group-hover:border-gray-500 transition-all shadow-md"><FaGithub className="w-4 h-4" /></div><span className="text-sm font-medium">GitHub</span>
                </a>
                <a href="https://twitter.com/BITBOX688152" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-all hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(29,161,242,0.8)] group w-fit">
                  <div className="p-2 rounded-xl bg-[#0B0B13] border border-gray-800 group-hover:border-[#1DA1F2] transition-all shadow-md text-[#1DA1F2]"><FaTwitter className="w-4 h-4" /></div><span className="text-sm font-medium">Twitter</span>
                </a>
                <a href="https://www.linkedin.com/in/bit-box-community" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-all hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.8)] group w-fit">
                  <div className="p-2 rounded-xl bg-[#0B0B13] border border-gray-800 group-hover:border-[#0A66C2] transition-all shadow-md text-[#0A66C2]"><FaLinkedin className="w-4 h-4" /></div><span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a href="https://www.youtube.com/channel/UCXUTdcw27jaH_go9iyUjJnA" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-all hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] group w-fit">
                  <div className="p-2 rounded-xl bg-[#0B0B13] border border-gray-800 group-hover:border-[#FF0000] transition-all shadow-md text-[#FF0000]"><FaYoutube className="w-4 h-4" /></div><span className="text-sm font-medium">YouTube</span>
                </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="relative z-10 pt-8 border-t border-indigo-900/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bitbox. Made with <span className="text-red-500 mx-1">♥</span> by Bitbox India. 
          </p>
          <div className="text-gray-500 text-sm">
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  showAlert: PropTypes.func,
  mode: PropTypes.string,
};

export default Footer;
