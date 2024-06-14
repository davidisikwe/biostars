// // import React, { useState } from 'react';
// // import BiostarLogo from '../assets/logo6.svg';
// // import LanguageIcon from '@mui/icons-material/Language';
// // import RssFeedIcon from '@mui/icons-material/RssFeed';
// // import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
// // import LoginIcon from '@mui/icons-material/Login';
// // import { useNavigate } from 'react-router-dom';

// // const NavIcons = ({ logo, tab, onSelect, to, activeTab }) => {
// //   return (
// //     <div
// //       className='flex flex-col w-auto px-[13px] py-[16px] items-center text-[14px] text-[#1678C2] text-center'
// //       onClick={() => onSelect(to, tab)}
// //     >
// //       <div>{logo}</div>
// //       <p className='whitespace-nowrap'>{tab}</p>
// //     </div>
// //   );
// // };

// // const Navbar = () => {
// //   const [activeTab, setActiveTab] = useState('');

// //   const navigate = useNavigate();

// //   const handleNavigate = (to, tab) => {
// //     setActiveTab(tab);
// //     navigate(to);
// //   };

// //   return (
// //     <div className='w-[76rem] h-auto pt-[1rem] flex justify-between'>
// //       <div className='flex items-center'>
// //         <img src={BiostarLogo} className='h-auto w-auto' />
// //         <NavIcons
// //           logo={<LanguageIcon />}
// //           tab={'Community'}
// //           to={'/community'}
// //           onSelect={handleNavigate}
// //           activeTab={activeTab}
// //         />
// //         <NavIcons
// //           logo={<RssFeedIcon />}
// //           tab={'Planet'}
// //           to={'/planet'}
// //           onSelect={handleNavigate}
// //           activeTab={activeTab}
// //         />
// //         <NavIcons
// //           logo={<HistoryEduIcon />}
// //           tab={'New Post'}
// //           to={'/newpost'}
// //           onSelect={handleNavigate}
// //           activeTab={activeTab}
// //         />
// //       </div>
// //       <NavIcons
// //         logo={<LoginIcon />}
// //         tab={'Log In'}
// //         to={'/login'}
// //         onSelect={handleNavigate}
// //         activeTab={activeTab}
// //       />
// //     </div>
// //   );
// // };

// // export default Navbar;

// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import BiostarLogo from '../assets/logo6.svg';
// import LanguageIcon from '@mui/icons-material/Language';
// import RssFeedIcon from '@mui/icons-material/RssFeed';
// import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
// import LoginIcon from '@mui/icons-material/Login';

// // this component for navbar menus
// // it takes in props of the icon, the navbar menu name and link to another page
// // it uses nav links because you can style the active tabs/links.
// // nav links do not need you to make a state
// const NavIcons = ({ logo, tab, to }) => {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         `flex flex-col w-auto px-[13px] py-[16px] items-center text-[14px] text-[#1678C2] text-center ${
//           isActive ? 'font-bold' : ''
//         }`
//       } //className is a function that includes a statement, if isactive is true,
//       // meaning if after click is through, font-bold
//     >
//       <div>{logo}</div>
//       <p className='whitespace-nowrap'>{tab}</p>
//     </NavLink>
//   );
// };

// const Navbar = () => {
//   return (
//     <div className='w-[76rem] h-auto pt-[1rem] flex justify-between'>
//       <div className='flex items-center'>
//         <Link to={'/'}>
//           <img src={BiostarLogo} className='h-auto w-auto' />
//         </Link>
//         <NavIcons logo={<LanguageIcon />} tab={'Community'} to={'/community'} />
//         <NavIcons logo={<RssFeedIcon />} tab={'Planet'} to={'/planet'} />
//         <NavIcons logo={<HistoryEduIcon />} tab={'New Post'} to={'/newpost'} />
//       </div>
//       <NavIcons logo={<LoginIcon />} tab={'Log In'} to={'/login'} />
//     </div>
//     //navicon components are passing the props which are the icons
//     // text and to '/' address
//   );
// };

// export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import BiostarLogo from '../assets/logo6.svg';
import LanguageIcon from '@mui/icons-material/Language';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const NavIcons = ({ logo, tab, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col w-auto px-[13px] py-[16px] items-center text-[14px] text-[#1678C2] text-center ${
          isActive ? 'font-bold' : ''
        }`
      }
    >
      <div>{logo}</div>
      <p className='whitespace-nowrap'>{tab}</p>
    </NavLink>
  );
};

const Navbar = () => {
  const navigate = useNavigate();

  // this function is used to navigate to the home page on click
  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className='w-[76rem] h-auto pt-[1rem] flex justify-between'>
      <div className='flex items-center'>
        <img
          src={BiostarLogo}
          alt='Biostar Logo'
          className='h-auto w-auto hover:bg-[#fbfdef]'
          onClick={navigateHome}
        />
        <NavIcons logo={<LanguageIcon />} tab={'Community'} to={'/community'} />
        <NavIcons logo={<RssFeedIcon />} tab={'Planet'} to={'/planet'} />
        <NavIcons logo={<HistoryEduIcon />} tab={'New Post'} to={'/newpost'} />
      </div>
      <NavIcons logo={<LoginIcon />} tab={'Log In'} to={'/login'} />
    </div>
  );
};

export default Navbar;
