import React from 'react';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import searchicon from '../assets/searchicon.svg';
import { useState } from 'react';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='relative'>
      <input
        type='search'
        placeholder='Search ...'
        className='h-[37.6px] py-[9.5px] pl-[14px] pr-[40px] border bg-[#f8f8f9] rounded-[4px] focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50'
        style={{ width: '401.07px', borderWidth: '1px' }}
        name='Search Bar'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <svg
        className={`absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 pointer-events-none ${
          isFocused ? 'text-blue-500' : 'text-gray-500'
        }`}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M10 6a4 4 0 100 8 4 4 0 000-8zM21 21l-4.35-4.35'
        />
      </svg>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <SearchBar />
      <main className='mt-10'>
        <Post
          postTitle={'Phlogeny away alignment'}
          author={'tchosange'}
          updatedBy={'disikwe'}
        />
        <Post
          postTitle={'2nd Post'}
          author={'tchosange'}
          updatedBy={'disikwe'}
        />
        <Post postTitle={'prop'} author={'tchosange'} updatedBy={'habeeb'} />
      </main>
    </div>
  );
};

export default Homepage;
