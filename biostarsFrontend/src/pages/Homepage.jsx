import React from 'react';
import Navbar from '../components/Navbar';
import Post from '../components/Post';

const SearchBar = () => {
  return (
    <input
      type='search'
      placeholder='Search ...'
      className='w-[442.5px] h-[37.6px] py-[9.5px] pl-[14px] pr-[37.4px] border bg-[#f8f8f9]'
      name='Search Bar'
    />
  );
};

const Homepage = () => {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <SearchBar />
      <main className='mt-10'>
        <Post />
      </main>
    </div>
  );
};

export default Homepage;
