import React from 'react';
import '.../sass/headers.scss'; /* Importa los estilos sass comunes */

function PinkHeader() {

    return (

        <header>

            {
                <div>

                    <div className="common-header">

                        <div className="logo-container">
                            <img src="logo.png" alt="Logo" className="logo"></img>
                        </div>

                        <div className="user-container">
                            <p>Bienvenido, David</p>
                            <img src="../assets/images/User_Icon_Creamy" alt="Ícono de Usuario" className="user-icon">
                        </div>
                    </div>

                    <div className="section-header">

                        <div className="container" style={{ borderBottom: '3px solid #FF683F', backgroundColor: '#FDFBF5' }}>
                            <img src="../assets/Images/Menu_Icon_Grey" alt="Menu_Icon_Grey" className="icon">
                                <p className="section-name">Menú</p>
                        </div>

                        <div className="container" style={{ backgroundColor: '#FDFBF5', borderBottom: '3px solid #4AAF73' }}>
                            <img src="../assets/Images/Recetario_Icon_Grey" alt="Recetario_Icon_Grey" className="icon">
                                <p className="section-name">Recetario</p>
                        </div>

                        <div className="container" style={{ backgroundColor: '#FDFBF5', borderBottom: '3px solid #DC5F7D' }}>
                            <img src="../assets/Images/Crear_Icon_Grey" alt="Crear_Icon_Grey" className="icon">
                                <p className="section-name">Crear receta</p>
                        </div>

                        <div className="container" style={{ backgroundColor: '#FDFBF5', borderBottom: '3px solid #3E86C1' }}>
                            <img src="../assets/Images/Calendario_Icon_Grey" alt="Calendario_Icon_Grey" className="icon"></img>
                            <p className="section-name">Calendario</p>
                        </div>

                        <div className="container" style={{ color: '#FDFBF5', backgroundColor: '#DC5F7D' }}>
                            <img src="../assets/Images/Compra_Icon_Creamy" alt="Compra_Icon_Creamy" className="icon">
                                <p className="section-name">Compra</p>
                        </div>

                    </div>

                </div>

            }

        </header >

    );
}

export default PinkHeader;