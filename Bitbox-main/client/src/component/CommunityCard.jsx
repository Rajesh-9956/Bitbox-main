// CSS removed for tailwind
// import { useState } from 'react';
import PropTypes from 'prop-types';
import avatarImg from '../assets/images/logo.png'
import FavourModalImg from '../assets/images/Modal Image/Favourite.png'
import commentModalImg from '../assets/images/Modal Image/comment.png'
import githubCardImg from '../assets/images/Modal Image/githubcard.png'
import DetailCardImg from '../assets/images/Modal Image/Details.png'

const CommunityCard = (props) => {
  const { project, showDetailProject } = props;
  // const [like,setLike]=useState(false)

  const HandleColor = () => {

  }

  // Function to generate a unique image URL for each project
  const generateImageUrl = (projectId) => {
    return `https://source.unsplash.com/910x900/?computer/?coding/&${projectId}`;
  };

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
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-2 shadow-md ${props.mode === 'dark' ? 'bg-[#0B0B13] border border-gray-800 shadow-neon' : 'bg-indigo-50 border border-indigo-100'}`}>
            <img src={avatarImg} alt="avatar" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h3 className={`text-xl font-extrabold tracking-tight truncate ${props.mode === 'dark' ? 'text-white group-hover:text-cyan-400 transition-colors' : 'text-gray-900 group-hover:text-indigo-600'}`}>
                {project.title.length > maxTitleLength ? project.title.slice(0, maxTitleLength) + '...' : project.title}
            </h3>
            <p className={`text-xs font-bold tracking-widest uppercase mt-1 ${props.mode === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                {formatDate(project.date)}
            </p>
          </div>
        </div>

        {/* Body */}
        <p className={`text-sm font-medium mb-6 leading-relaxed ${props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description.length > maxDescriptionLength ? project.description.slice(0, maxDescriptionLength) + '...' : project.description}
        </p>

        {/* Hero Image */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 group-hover:shadow-inner transition-shadow">
          <img src={generateImageUrl(project._id)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Project Visual" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white text-xs font-bold uppercase tracking-widest">View Project</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className={`flex items-center justify-between pt-4 border-t ${props.mode === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}>
          <div className="flex items-center gap-3">
            <button onClick={HandleColor} className={`p-2.5 rounded-xl transition-all hover:scale-110 ${props.mode === 'dark' ? 'bg-[#0B0B13] hover:bg-rose-500/20 hover:text-rose-400 text-gray-400 border border-gray-800' : 'bg-rose-50 hover:bg-rose-100 text-rose-500'}`} title="Like">
              <img src={FavourModalImg} alt="Like" className="w-5 h-5 opacity-70 hover:opacity-100 filter-invert" style={{ filter: props.mode === 'dark' ? 'invert(1) brightness(0.7)' : 'none' }} />
            </button>
            <button className={`p-2.5 rounded-xl transition-all hover:scale-110 ${props.mode === 'dark' ? 'bg-[#0B0B13] hover:bg-cyan-500/20 hover:text-cyan-400 text-gray-400 border border-gray-800' : 'bg-cyan-50 hover:bg-cyan-100 text-cyan-500'}`} title="Comment">
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
    </div>
  )
}

// Props Vadilation
CommunityCard.propTypes = {
  project: PropTypes.object,
  showDetailProject: PropTypes.func,
  mode: PropTypes.string,
};

export default CommunityCard
