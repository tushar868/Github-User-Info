import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './Components/UserForm';
import UserCard from './Components/UserCard';

function App() {
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchGitHubUserData = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setErrorMessage(null);
    } catch (error) {
      console.error(error);
      setUserData(null);
      setErrorMessage('User not found');
    }
  };

  return (
    <div className="App">
      <header className="bg-black p-4 text-white text-2xl font-semibold">
        GitHub User Info
      </header>
      <div className="p-4">
        <UserForm onSearch={fetchGitHubUserData} />
        <UserCard userData={userData} errorMessage={errorMessage} />
      </div>
    </div>
  );
}

export default App;
