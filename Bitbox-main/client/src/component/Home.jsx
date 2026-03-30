import PropTypes from 'prop-types';
import HeroImg from '../assets/images/Vector Gif/Hero.gif';
import glichBitboxGif from '../assets/images/Other Gifs/Bitbox Glitch.gif';
import ContactForm from './ContactForm';
import { 
  FiSend, FiUsers, FiBookOpen, FiShield, FiZap, FiGlobe, 
  FiCode, FiShare2, FiTrendingUp, FiLayers, FiChevronRight, 
  FiTerminal, FiDatabase, FiServer, FiCpu
} from 'react-icons/fi';

function Home({ mode, setProgress, showAlert }) {
  // Determine if we are in the premium dark web3 mode
  const isDark = mode === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#05050A] text-white' : 'bg-[#f8fafc] text-gray-900'} overflow-x-hidden pt-24 font-sans relative`}>
      
      {/* --- Abstract 3D Floating Background Nodes --- */}
      {isDark && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            {/* Primary Blue Blob */}
            <div className="absolute -top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-indigo-600/20 blur-[130px] animate-pulse-glow"></div>
            {/* Secondary Pink Blob */}
            <div className="absolute top-[20%] right-[-5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-fuchsia-600/15 blur-[120px] animate-float-delayed"></div>
            {/* Tertiary Cyan Blob */}
            <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-cyan-600/10 blur-[150px] animate-float-slow"></div>
            
            {/* Floating CSS Geometric Shapes */}
            <div className="hidden md:block absolute top-[15%] left-[5%] w-24 h-24 border border-indigo-500/30 rounded-2xl rotate-45 animate-float opacity-40 shadow-neon"></div>
            <div className="hidden md:block absolute top-[30%] right-[10%] w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-indigo-500 rounded-full animate-float-delayed opacity-20 blur-[2px]"></div>
            <div className="hidden md:block absolute top-[60%] left-[8%] w-32 h-32 border border-cyan-500/20 rounded-full animate-float-slow opacity-30 shadow-[0_0_20px_rgba(34,211,238,0.2)]"></div>
        </div>
      )}

      {/* --- Hero Section --- */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 flex flex-col lg:flex-row items-center gap-16 z-10 animate-fade-in">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left z-10">
          <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm animate-slide-up tracking-widest uppercase shadow-md ${isDark ? 'bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 shadow-neon' : 'bg-indigo-100 text-indigo-700'}`} style={{ animationDelay: '0.1s' }}>
            <FiSend className={`w-4 h-4 ${isDark ? 'text-cyan-400' : ''}`} /> VERY PROUD TO INTRODUCE
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight animate-slide-up leading-tight" style={{ animationDelay: '0.2s' }}>
            Seamless Learning for <br className="hidden lg:block"/>
            <span className="text-gradient drop-shadow-lg">Brighter Futures</span>
          </h1>
          
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 animate-slide-up font-medium leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`} style={{ animationDelay: '0.3s' }}>
            Our innovative platform offers an effortless and seamless approach to learning. Join the ultimate 3D Web3 experience connecting students of all ages.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-6 animate-slide-up w-full px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
            <a href="#features" className={`w-full sm:w-auto px-10 py-4 rounded-xl font-extrabold flex items-center justify-center gap-3 text-lg transition-all ${isDark ? 'bg-indigo-600 text-white btn-3d' : 'bg-indigo-600 text-white shadow-xl hover:-translate-y-1'}`}>
              Start Now <FiChevronRight className="w-6 h-6" />
            </a>
            <a href="#about" className={`w-full sm:w-auto px-10 py-4 rounded-xl font-bold flex items-center justify-center text-lg transition-all ${isDark ? 'bg-[#1a1a2e] text-gray-200 border border-gray-700 btn-3d-secondary hover:bg-[#252542]' : 'bg-white text-gray-900 border-2 border-gray-200 shadow-lg hover:-translate-y-1'}`}>
              Take Tour
            </a>
          </div>
        </div>

        {/* 3D Visual/Image Content */}
        <div className="flex-1 relative animate-slide-up w-full flex justify-center perspective-[1000px]" style={{ animationDelay: '0.5s' }}>
            {/* Pulsing Backlight */}
            {isDark && <div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-[100px] animate-pulse-glow z-0"></div>}
            
            {/* The Floating Image */}
            <div className="relative z-10 w-full max-w-lg mx-auto animate-float transform-style-3d">
              <img src={HeroImg} alt="Bitbox Hero" className={`w-full h-auto object-contain transition-transform duration-700 hover:scale-105 hover:rotate-2 ${isDark ? 'drop-shadow-[0_20px_50px_rgba(99,102,241,0.5)]' : 'drop-shadow-2xl'}`} />
            </div>
        </div>
      </section>

      {/* --- Performance Metrics Section --- */}
      <section className={`py-12 relative z-20 ${isDark ? 'border-y border-indigo-900/30 bg-[#0A0A1F]/80 backdrop-blur-md' : 'border-y border-gray-200 bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-x-0 sm:divide-x-2 divide-gray-200 dark:divide-indigo-900/40">
              {[
                { label: 'Active Users', value: '10K+', icon: FiUsers, color: 'text-cyan-400' },
                { label: 'Performance', value: '99.9%', icon: FiZap, color: 'text-yellow-400' },
                { label: 'Open Projects', value: '500+', icon: FiLayers, color: 'text-purple-400' },
                { label: 'Global Reach', value: '120+', icon: FiGlobe, color: 'text-emerald-400' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center p-4 hover:-translate-y-2 transition-transform duration-300">
                  <div className={`p-4 rounded-2xl mb-4 ${isDark ? 'bg-[#151525] border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]' : 'bg-indigo-50'}`}>
                    <stat.icon className={`w-8 h-8 ${isDark ? stat.color : 'text-indigo-600'}`} />
                  </div>
                  <h4 className={`text-4xl md:text-5xl font-extrabold mb-1 ${isDark ? 'text-white text-neon' : 'text-gray-900'}`}>{stat.value}</h4>
                  <p className={`text-sm tracking-widest uppercase font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* --- 3D Feature Cards Section --- */}
      <section id="features" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
            <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 inline-block px-5 py-2.5 rounded-full ${isDark ? 'text-cyan-400 bg-cyan-900/30 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'text-indigo-600 bg-indigo-50'}`}>Community Cornerstone</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold mb-6">Empowering <br className="sm:hidden" /><span className="text-gradient">Collaboration</span></h3>
            <p className={`max-w-2xl mx-auto text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Experience true depth and dimension as ideas flourish within our open-source, interconnected universe.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {[
            { title: 'Grow Together', desc: 'Step into a new dimension where ideas flourish. Innovating together to unlock our shared destiny.', icon: FiTrendingUp, gradient: 'from-pink-500 to-rose-500' },
            { title: 'Learn Deeply', desc: 'Knowledge structurally aligns in volumetric space. Discover new architectures of collaborative learning.', icon: FiBookOpen, gradient: 'from-cyan-400 to-blue-500' },
            { title: 'Share Widely', desc: 'Collaborate, innovate, and project your work across a globally decentralized digital network.', icon: FiShare2, gradient: 'from-purple-500 to-indigo-500' },
            { title: 'Transparency', desc: 'Access projects with crystalline clarity. Every contribution builds the foundation of trust.', icon: FiShield, gradient: 'from-emerald-400 to-teal-500' },
            { title: 'Innovation Engine', desc: 'Harness the collective computational creativity of a worldwide network pushing boundaries.', icon: FiCode, gradient: 'from-amber-400 to-orange-500' },
            { title: 'Global Parallax', desc: 'Make an impact that resonates across multiple layers of digital and physical realities.', icon: FiGlobe, gradient: 'from-indigo-400 to-cyan-400' },
          ].map((feat, i) => (
            <div key={i} className={`p-8 rounded-[2rem] w-full ${isDark ? 'card-3d' : 'bg-white border border-gray-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-200'}`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform transition-transform group-hover:scale-110 ${isDark ? `bg-gradient-to-br ${feat.gradient}` : 'bg-indigo-100 text-indigo-600'}`}>
                <feat.icon className={`w-8 h-8 ${isDark ? 'text-white' : ''}`} />
              </div>
              <h4 className={`text-2xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{feat.title}</h4>
              <p className={`leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Services / 3D Glitch Showcase --- */}
      <section id="services" className={`py-32 relative overflow-hidden z-10 ${isDark ? 'bg-[#0B0B13] border-y border-indigo-900/30' : 'bg-indigo-50/50 border-y border-indigo-100'}`}>
        {/* Core Parallax Glow inside container */}
        {isDark && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
               <h2 className={`text-sm font-bold uppercase tracking-widest mb-2 inline-block px-5 py-2.5 rounded-full ${isDark ? 'text-purple-400 bg-purple-900/30 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'text-indigo-600 bg-indigo-50'}`}>Our Services</h2>
               <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">We're Preparing <br className="hidden sm:block"/><span className="text-gradient">The Future</span></h3>
               <p className={`text-xl font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                 Our flagship Web3 integration service is currently rendering. We are building powerful dimensional tools to enhance your open-source journey.
               </p>
               <div className="pt-6 w-full px-4 sm:px-0 flex justify-center lg:justify-start">
                 <button className={`w-full sm:w-auto px-10 py-4 rounded-xl font-extrabold text-lg transition-all ${isDark ? 'bg-white text-black btn-3d' : 'bg-gray-900 text-white shadow-xl hover:-translate-y-1'}`}>
                    Get Notified
                 </button>
               </div>
            </div>
            
            {/* Right Side 3D Object Render area */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end perspective-[1200px]">
              <div className={`p-4 rounded-[3rem] animate-float-delayed transform-style-3d ${isDark ? 'bg-[#151525] border border-gray-800 shadow-[0_30px_60px_rgba(0,0,0,0.8)]' : 'bg-white shadow-2xl'}`}>
                <img src={glichBitboxGif} alt="Bitbox Glitch" className="w-full h-auto max-w-sm rounded-[2.5rem] object-cover mix-blend-screen" />
              </div>
            </div>
        </div>
      </section>

      {/* --- Tech Stack Banner --- */}
      <section className={`py-20 relative z-10 ${isDark ? 'bg-[#05050A]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 text-center">
             <h3 className={`text-sm font-bold mb-16 uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Powered by Next-Gen Technologies</h3>
             <div className="flex flex-wrap justify-center gap-12 sm:gap-20">
                {[
                  { Icon: FiTerminal, color: 'hover:text-cyan-400 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]' },
                  { Icon: FiDatabase, color: 'hover:text-purple-400 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]' },
                  { Icon: FiServer, color: 'hover:text-emerald-400 hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]' },
                  { Icon: FiCpu, color: 'hover:text-pink-400 hover:drop-shadow-[0_0_15px_rgba(244,114,182,0.5)]' },
                  { Icon: FiGlobe, color: 'hover:text-blue-400 hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]' },
                  { Icon: FiLayers, color: 'hover:text-rose-400 hover:drop-shadow-[0_0_15px_rgba(251,113,133,0.5)]' }
                ].map(({Icon, color}, i) => (
                  <div key={i} className={`flex flex-col items-center gap-2 transition-all duration-300 transform hover:-translate-y-3 hover:scale-110 ${isDark ? 'text-gray-700 '+color : 'text-gray-300 hover:text-indigo-500'}`}>
                    <Icon className="w-12 h-12 md:w-16 md:h-16" />
                  </div>
                ))}
             </div>
          </div>
      </section>

      {/* --- Contact Section --- */}
      <div className="relative z-20">
        <ContactForm mode={mode} />
      </div>

    </div>
  );
}

Home.propTypes = {
    mode: PropTypes.string,
    setProgress: PropTypes.func,
    showAlert: PropTypes.func,
};

export default Home;