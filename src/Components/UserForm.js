// UserForm.js
import React, { useState } from 'react';

const UserForm = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <div className="mt-8 flex justify-center">
      <form onSubmit={handleSubmit} className="max-w-xs w-full">
        <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            required
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Get Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
