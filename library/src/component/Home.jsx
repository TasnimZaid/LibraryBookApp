import React from 'react';
import ResultAdd from './ResultAdd';

const Home = () => {
  const userName = localStorage.getItem('name');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div>
      <div style={{ textAlign: 'center' }}>
        {userName ? (
          <h1>Welcome, {userName}!</h1>
        ) : (
          <h1>Welcome to our website!</h1>
        )}
      </div>
      </div>
      <div><ResultAdd /></div>
    </div>
  );
};

export default Home;
