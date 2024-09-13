import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
