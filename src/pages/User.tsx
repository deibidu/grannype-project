import React from 'react';
import './User.scss';
import userIconGrey from '../assets/images/userIconGrey.png';

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <div className="topbar">Welcome, David</div>
      <div className="content">
        <img src={userIconGrey}></img>
        <div className="input-box">Nombre de usuario</div>
        <div className="input-box">Correo electrónico</div>
        <div className="input-box">Contraseña</div>
        <button className="accept-button">Aceptar</button>
      </div>
    </div>
  );
};

export default ProfilePage;
