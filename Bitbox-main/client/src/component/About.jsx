// CSS removed for tailwind
import PropTypes from 'prop-types';
// import { useEffect } from "react";
// images import
import img1 from "../assets/images/Anuj.png";
import img2 from "../assets/images/Jitendra.png";
import img3 from "../assets/images/Rajesh.png";
import img4 from "../assets/images/Harshit.png";
import AboutImgHero from "../assets/images/Others/heroimg.png";
import '@fortawesome/fontawesome-free/css/all.css';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {Contri} from './Contributers'
// import { Link } from "react-router-dom";

export default function About(props) {
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var bootstrap;
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
  popoverList; // Necessary code, but suppressed the warning for unused variable

  // const [visitorsCount, setVisitorsCount] = useState(100000); // Initial count of visitors

  // useEffect(() => {
  //   // Increment visitors count when component mounts (new user visits)
  //   setVisitorsCount(prevCount => prevCount + 1);
  // }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <div className={`min-h-screen pt-24 pb-12 font-sans relative overflow-hidden ${props.mode === 'dark' ? 'bg-[#05050A] text-white' : 'bg-[#f8fafc] text-gray-900'}`}>
        
      {/* Abstract Background Elements */}
      {props.mode === 'dark' && (
          <>
              <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>
              <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-fuchsia-600/10 blur-[150px] rounded-full animate-pulse-glow pointer-events-none"></div>
          </>
      )}

      {/* About Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <section className="flex flex-col lg:flex-row items-center gap-12 py-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-2">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              About <br className="hidden lg:block"/><span className="text-gradient">Bitbox</span>
            </h3>
            <p className={`text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Bitbox is a friendly community where people working on projects can come together. If you're stuck or need advice, you can ask for help. And if you know something, you can share your knowledge with others. It's all about supporting each other and building a helpful community. 🌟
            </p>
            <p className={`text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Welcome to our open-source platform, where innovation knows no bounds and collaboration is key. Dive into our repository of code, where creativity flourishes and solutions come to life.
            </p>
          </div>
          
          <div className="flex-1 flex justify-center perspective-[1200px]">
            <div className={`p-4 rounded-[3rem] animate-float transform-style-3d ${props.mode === 'dark' ? 'bg-[#151525] border border-gray-800 shadow-[0_30px_60px_rgba(0,0,0,0.8)]' : 'bg-white shadow-2xl'}`}>
                <img src={AboutImgHero} alt="About Hero" className="w-full max-w-md object-contain rounded-[2.5rem]" />
            </div>
          </div>
        </section>
      </div>
      {/* Website Record Section */}

      {/* Team Section */}
      <div className={`py-20 relative z-10 ${props.mode === 'dark' ? 'bg-[#0A0A1F]/80 backdrop-blur-md border-y border-indigo-900/30' : 'bg-white border-y border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-slide-up">
                <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 inline-block px-5 py-2.5 rounded-full ${props.mode === 'dark' ? 'text-indigo-400 bg-indigo-900/30 border border-indigo-500/30' : 'text-indigo-600 bg-indigo-50'}`}>Core Members</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Meet the <span className="text-gradient">Team</span></h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                  { name: 'Anuj Verma', img: img1, desc: "Tech-savvy person who loves working with AI and building websites.", links: ['https://github.com/Anuj3553'] },
                  { name: 'Jitendra Kumar', img: img2, desc: "Tech enthusiast skilled in web development and database management.", links: ['https://github.com/technical-jitendra'] },
                  { name: 'Rajesh Kumar', img: img3, desc: "Software engineer skilled in Java, C#, HTML, CSS, and JavaScript.", links: ['https://github.com/Rajesh-9956'] },
                  { name: 'Harshit Singh', img: img4, desc: "Software engineer skilled in C, C++, Python, HTML, CSS, and JavaScript.", links: ['https://github.com/harshit7492'] }
              ].map((member, i) => (
                  <div key={i} className={`group p-6 rounded-[2rem] transition-all duration-300 transform hover:-translate-y-2 text-center ${props.mode === 'dark' ? 'card-3d bg-[#151525] border border-gray-800' : 'bg-white shadow-xl hover:shadow-2xl border border-gray-100'}`}>
                      <div className={`w-32 h-32 mx-auto rounded-full p-2 mb-6 ${props.mode === 'dark' ? 'bg-[#0B0B13] border-2 border-indigo-500/50 shadow-neon' : 'bg-indigo-50 border-2 border-indigo-200'}`}>
                          <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
                      </div>
                      <h4 className={`text-xl font-bold mb-2 ${props.mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>{member.name}</h4>
                      <p className={`text-sm mb-6 ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{member.desc}</p>
                      <div className="flex justify-center gap-4">
                          <a href={member.links[0]} target="_blank" rel="noreferrer" className={`p-2 rounded-full transition-colors ${props.mode === 'dark' ? 'bg-[#0B0B13] text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800' : 'bg-gray-100 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'}`}>
                              <i className="fab fa-github"></i>
                          </a>
                          <a href="#" className={`p-2 rounded-full transition-colors ${props.mode === 'dark' ? 'bg-[#0B0B13] text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800' : 'bg-gray-100 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'}`}>
                              <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#" className={`p-2 rounded-full transition-colors ${props.mode === 'dark' ? 'bg-[#0B0B13] text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800' : 'bg-gray-100 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'}`}>
                              <i className="fab fa-linkedin"></i>
                          </a>
                      </div>
                  </div>
              ))}
            </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className={`py-16 relative z-10 ${props.mode === 'dark' ? 'bg-[#05050A]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { label: 'Visitors', value: '876K+', icon: faUser, color: 'text-indigo-400' },
                    { label: 'Registrations', value: '876K+', icon: faUser, color: 'text-cyan-400' },
                    { label: 'Participants', value: '876K+', icon: faUser, color: 'text-fuchsia-400' },
                    { label: 'Total Projects', value: '828K+', icon: faCoffee, color: 'text-emerald-400' }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${props.mode === 'dark' ? 'bg-[#151525] border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]' : 'bg-white shadow-lg'}`}>
                            <FontAwesomeIcon icon={stat.icon} className={`text-2xl ${props.mode === 'dark' ? stat.color : 'text-indigo-600'}`} />
                        </div>
                        <h4 className={`text-3xl font-extrabold mb-1 ${props.mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>{stat.value}</h4>
                        <p className={`text-sm font-bold uppercase tracking-widest ${props.mode === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
      {/* FAQ */}
      <div className={`py-20 relative z-10 ${props.mode === 'dark' ? 'bg-[#0B0B13] border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">Frequently Asked <span className="text-gradient">Questions</span></h2>
            
            <div className="accordion rounded-2xl overflow-hidden shadow-lg" id="accordionExample">
                <div className={`accordion-item border-b ${props.mode === 'dark' ? 'bg-[#151525] border-gray-800 text-white' : 'bg-white border-gray-200'}`}>
                  <h2 className="accordion-header">
                    <button className={`accordion-button collapsed font-bold py-5 ${props.mode === 'dark' ? 'bg-[#151525] text-white hover:text-cyan-400 focus:bg-[#1A1A2E]' : 'bg-white text-gray-900 focus:bg-indigo-50'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      Will a beginner, with absolutely no knowledge of github, gain anything fruitful?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className={`accordion-body ${props.mode === 'dark' ? 'text-gray-400 bg-[#151525]' : 'text-gray-600 bg-white'}`}>
                      Yeah, definitely. The organization is meant to assist the beginners grow in the field of development. We'll have distinct projects appropriate both for beginners as well as the accolades and thereby we'll make sure that each and every participant gets to learn something new from the projects he or she is contributing for.
                    </div>
                  </div>
                </div>

                <div className={`accordion-item border-b ${props.mode === 'dark' ? 'bg-[#151525] border-gray-800 text-white' : 'bg-white border-gray-200'}`}>
                  <h2 className="accordion-header">
                    <button className={`accordion-button collapsed font-bold py-5 ${props.mode === 'dark' ? 'bg-[#151525] text-white hover:text-cyan-400 focus:bg-[#1A1A2E]' : 'bg-white text-gray-900 focus:bg-indigo-50'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      Are there any charges for registration?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className={`accordion-body ${props.mode === 'dark' ? 'text-gray-400 bg-[#151525]' : 'text-gray-600 bg-white'}`}>
                      No, there are no fees associated with participation. It is completely free of charge.
                    </div>
                  </div>
                </div>

                <div className={`accordion-item border-b ${props.mode === 'dark' ? 'bg-[#151525] border-gray-800 text-white' : 'bg-white border-gray-200'}`}>
                  <h2 className="accordion-header">
                    <button className={`accordion-button collapsed font-bold py-5 ${props.mode === 'dark' ? 'bg-[#151525] text-white hover:text-cyan-400 focus:bg-[#1A1A2E]' : 'bg-white text-gray-900 focus:bg-indigo-50'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      Is there a specific age requirement for participation?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className={`accordion-body ${props.mode === 'dark' ? 'text-gray-400 bg-[#151525]' : 'text-gray-600 bg-white'}`}>
                      No, there are no age restrictions for joining. All age groups are welcome to participate.
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}


// Props Validation
About.propTypes = {
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
  showAlert: PropTypes.func,
};