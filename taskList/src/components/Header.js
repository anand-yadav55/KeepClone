import React, { useState } from 'react';
import Branding from './Branding.js';
export default function Header(props) {
  const username = () => {
    let username = props.username[0].toUpperCase();
    for (let i = 1; i < props.username.length; i++) {
      console.log(username);
      if (username[i - 1] == ' ') {
        username += props.username[i].toUpperCase();
      } else {
        username += props.username[i];
      }
    }
    console.error(username);

    return username;
  };

  const [userName, setUserName] = useState(username);

  return (
    <div className="navbar">
      <Branding></Branding>
      <div className="menu">
        <span>🤠</span>
        <div className="box collapsed">
          <div>Welcome, {userName}</div>
          <ul>
            <li>My Profile</li>
            <li>Account Settings</li>
            <li>Sign Out</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
