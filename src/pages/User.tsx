import React from 'react';
import './User.scss';
import userImage from './user-image.png'; // Imagen del ícono

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <div className="topbar">
                Welcome David
            </div>
            <div className="content">
                <img src={userImage} alt="User" className="user-image" />
                <div className="input-box">nombre de usuario</div>
                <div className="input-box">correo electrónico</div>
                <div className="input-box">contraseña</div>
                <button className="accept-button">Aceptar</button>
            </div>
        </div>
    );
}

export default LandingPage;