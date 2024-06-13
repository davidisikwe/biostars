import React, { useState } from 'react';
import BiostarLogo from '../assets/logo6.svg';
import LanguageIcon from '@mui/icons-material/Language';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const NavIcons = ({ logo, tab, component, activeTab, setActiveTab, to }) => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    // setActiveTab(tab);
    navigate(to);

    // const bold = e.target.value(() => setActiveTab(<strong>{tab}</strong>));
    // return bo
  };

  return (
    <div
      className='flex flex-col w-auto px-[13px] py-[16px] items-center text-[14px] text-[#1678C2] text-center'
      onClick={handleNavigate}
    >
      <div>{logo}</div>
      <p className='whitespace-nowrap'>{tab}</p>
    </div>
  );
};

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <div className='w-[76rem] h-auto pt-[1rem] flex justify-between'>
      <div className='flex items-center'>
        <img src={BiostarLogo} className='h-auto w-auto' />
        <NavIcons
          logo={<LanguageIcon />}
          tab={'Community'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          to={'/community'}
        />
        <NavIcons
          logo={<RssFeedIcon />}
          tab={'Planet'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          to={'/planet'}
        />
        <NavIcons
          logo={<HistoryEduIcon />}
          tab={'New Post'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          to={'/newpost'}
        />
      </div>
      <NavIcons
        logo={<LoginIcon />}
        tab={'Log In'}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        to={'/login'}
      />
    </div>
  );
};

export default Navbar;
