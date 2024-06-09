import React from 'react';
import './User.scss';

const ProfilePage: React.FC = () => {
    return (
        <div className="profile-page">
            <div className="topbar">
                Welcome David
            </div>
            <div className="content">
                <div className="user-icon">👤</div>
                <div className="input-box">Nombre de usuario</div>
                <div className="input-box">Correo electrónico</div>
                <div className="input-box">Contraseña</div>
                <button className="accept-button">Aceptar</button>
            </div>
        </div>
    );
}

export default ProfilePage;