// UserCard.js
import React from 'react';

const UserCard = ({ userData, errorMessage }) => {
  return (
    <div className="mt-8 p-6 bg-white rounded-lg">
      {errorMessage ? (
        <p className="text-red-500 text-center text-lg">{errorMessage}</p>
      ) : userData ? (
        <div>
          <img src={userData.avatar_url} alt="User Avatar" className="mx-auto  h-24 w-24 mb-4" />
          <h2 className="text-2xl font-semibold text-center">{userData.login}</h2>
          <p className="text-gray-600 text-center">Name: {userData.name}</p>
          <p className="text-gray-600 text-center">Public Repos: {userData.public_repos}</p>
          <p className="text-gray-600 text-center">Public Gists: {userData.public_gists}</p>
          <p className="text-gray-600 text-center">
            Profile Created At: {new Date(userData.created_at).toLocaleDateString()}
          </p>
          <a
            href={`https://github.com/${userData.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-blue-500 hover:underline"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              className="w-6 h-6 inline-block mr-2"
            />
            View on GitHub
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default UserCard;
