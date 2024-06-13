import { useState } from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Community from './pages/Community';
import Planet from './pages/Planet';
import NewPost from './pages/NewPost';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/community' element={<Community />} />
          <Route path='/planet' element={<Planet />} />
          <Route path='/newpost' element={<NewPost />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
