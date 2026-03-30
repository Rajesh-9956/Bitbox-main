import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import profileContext from '../context/profileContext';
import projectContext from "../context/projectContext";
// CSS removed for tailwind
// Image
import avatarImg from "../assets/images/logo.png";
import FavourModalImg from '../assets/images/Modal Image/Favourite.png'
import commentModalImg from '../assets/images/Modal Image/comment.png'
import githubCardImg from '../assets/images/Modal Image/githubcard.png'
import DetailCardImg from '../assets/images/Modal Image/Details.png'

const MyProfileCard = (props) => {
  const { project, updateProject, showDetailProject, showAlert } = props;
  const [showModal, setShowModal] = useState(false);
  const context = useContext(projectContext);
  const { deleteProject } = context;

  const generateImageUrl = (projectId) => {
    return `https://source.unsplash.com/910x900/?coding/?computer/&${projectId}`;
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    deleteProject(project._id);
    showAlert("Deleted Successfully", "success");
    handleModalClose();
  };

  // Profile Context
  let navigate = useNavigate();
  const userProfileContext = useContext(profileContext);
  const { userProfile, getUserProfile } = userProfileContext;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUserProfile();
    }
    else {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [])

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero for single-digit months
    const day = ('0' + date.getDate()).slice(-2); // Add leading zero for single-digit days
    const hours = ('0' + date.getHours()).slice(-2); // Add leading zero for single-digit hours
    const minutes = ('0' + date.getMinutes()).slice(-2); // Add leading zero for single-digit minutes

    // Format the date and time
    return `${day}/${month}/${year} | ${hours}:${minutes}`;
  };

  // Max Length for title and description
  const maxTitleLength = 30; 
  const maxDescriptionLength = 75;

  return (
    <div className='w-full p-4 relative group perspective-[1000px]'>
      <div className={`relative h-full overflow-hidden transition-all duration-500 transform-style-3d group-hover:rotate-x-2 group-hover:-translate-y-2 rounded-[2rem] p-6 border ${props.mode === 'dark' ? 'bg-[#151525] border-gray-800 shadow-[0_15px_35px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)] group-hover:border-cyan-500/30' : 'bg-white border-gray-100 shadow-xl group-hover:shadow-2xl group-hover:border-indigo-200'}`}>
        
        {/* Glow behind image on hover in dark mode */}
        {props.mode === 'dark' && (
           <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-2 shadow-md ${props.mode === 'dark' ? 'bg-[#0B0B13] border border-gray-800 shadow-neon' : 'bg-indigo-50 border border-indigo-100'}`}>
              <img src={avatarImg} alt="avatar" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className={`text-xl font-extrabold tracking-tight truncate ${props.mode === 'dark' ? 'text-white group-hover:text-cyan-400 transition-colors' : 'text-gray-900 group-hover:text-indigo-600'}`}>
                  {project.title.length > maxTitleLength ? project.title.slice(0, maxTitleLength) + '...' : project.title}
              </h3>
              <p className={`text-xs font-bold tracking-widest uppercase mt-1 ${props.mode === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                  {formatDate(project.date)}
              </p>
            </div>
          </div>
          
          {/* Modify Actions (Edit/Delete) */}
          <div className="flex items-center gap-2">
            <button onClick={() => updateProject(project)} className={`p-2 rounded-xl transition-all hover:scale-110 ${props.mode === 'dark' ? 'bg-[#0B0B13] hover:bg-cyan-500/20 hover:text-cyan-400 text-gray-400 border border-gray-800' : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-500'}`} title="Edit Project">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={handleModalOpen} className={`p-2 rounded-xl transition-all hover:scale-110 ${props.mode === 'dark' ? 'bg-[#0B0B13] hover:bg-rose-500/20 hover:text-rose-400 text-gray-400 border border-gray-800' : 'bg-rose-50 hover:bg-rose-100 text-rose-500'}`} title="Delete Project">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>

        {/* Body */}
        <p className={`text-sm font-medium mb-6 leading-relaxed ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description.length > maxDescriptionLength ? project.description.slice(0, maxDescriptionLength) + '...' : project.description}
        </p>

        {/* Hero Image */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 group-hover:shadow-inner transition-shadow border border-gray-800/50">
          <img src={generateImageUrl(project._id)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Project Visual" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white text-xs font-bold uppercase tracking-widest">View Details</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className={`flex items-center justify-between pt-4 border-t ${props.mode === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}>
          <div className="flex items-center gap-3">
            <button className={`p-2.5 rounded-xl transition-all hover:scale-110 ${props.mode === 'dark' ? 'bg-[#0B0B13] hover:bg-rose-500/20 hover:text-rose-400 text-gray-400 border border-gray-800' : 'bg-rose-50 hover:bg-rose-100 text-rose-500'}`} title="Like">
              <img src={FavourModalImg} alt="Like" className="w-5 h-5 opacity-70 hover:opacity-100 filter-invert" style={{ filter: props.mode === 'dark' ? 'invert(1) brightness(0.7)' : 'none' }} />
            </button>
            <button className={`p-2.5 rounded-xl transition-all hover:scale-110 ${props.mode === 'dark' ? 'bg-[#0B0B13] hover:bg-indigo-500/20 hover:text-indigo-400 text-gray-400 border border-gray-800' : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-500'}`} title="Comment">
              <img src={commentModalImg} alt="Comment" className="w-5 h-5 opacity-70 hover:opacity-100" style={{ filter: props.mode === 'dark' ? 'invert(1) brightness(0.7)' : 'none' }} />
            </button>
          </div>
          <div className="flex items-center gap-3">
             <button onClick={() => window.open(project.gitHubLink, '_blank')} className={`p-2.5 rounded-xl transition-all hover:scale-110 ${props.mode === 'dark' ? 'bg-[#0B0B13] hover:bg-gray-700 text-gray-400 border border-gray-800' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`} title="View Source">
              <img src={githubCardImg} alt="GitHub" className="w-5 h-5 opacity-70 hover:opacity-100" style={{ filter: props.mode === 'dark' ? 'invert(1) brightness(0.7)' : 'none' }} />
            </button>
            <button onClick={() => showDetailProject(project)} className={`p-2.5 rounded-xl transition-all hover:scale-110 font-bold ${props.mode === 'dark' ? 'bg-indigo-600 text-white shadow-neon hover:bg-indigo-500' : 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700'}`} title="View Details">
              <img src={DetailCardImg} alt="Details" className="w-5 h-5 filter brightness-0 invert" />
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className={`relative w-full max-w-md p-8 rounded-[2rem] shadow-2xl transform transition-all scale-100 ${props.mode === 'dark' ? 'bg-[#151525] border border-rose-500/30 shadow-[0_0_40px_rgba(244,63,94,0.15)]' : 'bg-white border border-rose-100'}`}>
            
            <button onClick={handleModalClose} className={`absolute top-4 right-4 p-2 rounded-xl transition-colors ${props.mode === 'dark' ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${props.mode === 'dark' ? 'bg-rose-500/20 text-rose-400' : 'bg-rose-100 text-rose-500'}`}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              
              <h3 className={`text-2xl font-bold mb-2 text-center ${props.mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>Delete Project</h3>
              <p className={`text-center mb-8 ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Are you sure you want to delete <span className="font-bold text-rose-500">{project.title}</span>? This action cannot be undone.
              </p>

              <div className="flex gap-4 w-full">
                <button onClick={handleModalClose} className={`flex-1 py-3 rounded-xl font-bold transition-all ${props.mode === 'dark' ? 'bg-[#0B0B13] text-gray-300 hover:bg-gray-800 border border-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  Cancel
                </button>
                <button onClick={handleDelete} className="flex-1 py-3 rounded-xl font-bold transition-all bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-500/30">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

MyProfileCard.propTypes = {
  project: PropTypes.object,
  profile: PropTypes.object,
  updateProject: PropTypes.func,
  showDetailProject: PropTypes.func,
  showAlert: PropTypes.func,
  mode: PropTypes.string,
};

export default MyProfileCard;
