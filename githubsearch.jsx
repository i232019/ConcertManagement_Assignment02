import React, { useState } from "react";
import './githubsearch.css';

function GithubSearch() 
{
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    if (!username) return;
    const response = await fetch(`https://api.github.com/search/users?q=${username}`);
    const data = await response.json();
    setUsers(data.items || []);
  };

  return (
    <div className="container">
      <h2>GitHub User Search</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <div className="result">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt="avatar" />
            <h3>{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GithubSearch;
