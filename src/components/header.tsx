import React from "react";
import "../sass/headers.scss";

export const Header = () => {
  return (
    <div>
      {" "}
      <div className="common-header">
        <div className="logo-container">
          <img src='../assets/images/Logo_Grannype.svg' alt="Logo" className="logo"></img>
        </div>

        <div className="user-container">
          <p>Bienvenido, David</p>
          <img
            src="../assets/images/User_Icon_Creamy.svg"
            alt="Ícono de Usuario"
            className="user-icon"
          />
        </div>
      </div>
    </div>
  );
};
