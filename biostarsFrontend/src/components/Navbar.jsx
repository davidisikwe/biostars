import React from 'react';
import Logo from '../assets/BiostarLogo.png';
import LanguageIcon from '@mui/icons-material/Language';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LoginIcon from '@mui/icons-material/Login';

const NavIcons = ({ logo, tab }) => {
  return (
    <div className='flex flex-col w-auto mx-[13px] my-[16px] items-center'>
      <>{logo}</>
      <p>{tab}</p>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className='w-[76rem] h-auto pt-[1rem] flex justify-between'>
      <div className='flex items-center'>
        <img src={Logo} className='h-auto w-auto' />
        <NavIcons logo={<LanguageIcon />} tab={'Community'} />
        <NavIcons logo={<RssFeedIcon />} tab={'Planet'} />
        <NavIcons logo={<HistoryEduIcon />} tab={'New Post'} />
      </div>
      <NavIcons logo={<LoginIcon />} tab={'Log In'} />
    </div>
  );
};

export default Navbar;
