import React from 'react';
import './User.scss';
import userIconGrey from '../assets/images/userIconGrey.png';

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <div className="topbar">Welcome, David</div>
      <div className="content">
        <img src={userIconGrey}></img>
        <div className="input-box">David</div>
        <div className="input-box">davidcooks@mail.com</div>
        <div className="input-box">*******</div>
        <button className="accept-button">Save</button>
      </div>
    </div>
  );
};

export default ProfilePage;
