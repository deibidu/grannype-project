import React from 'react';
import '.../sass/header.scss'; /* Importa los estilos sass comunes */

function OrangeHeader() {

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
                            <img src="icon_user.png" alt="Ícono de Usuario" className="user-icon">
                        </div>
                    </div>

                    <div className="section-header">

                        <div class="container" style="background-color: #FF683F; color:#FDFBF5;">
                            <img src="../assets/Menu_Icon_Creamy" alt="Menu_Icon_Creamy" className="icon"></img>
                            <p className="section-name">Menú</p>
                        </div>

                        <div class="container" style={{ background- color: $color-white-creamy, border-bottom: 3px solid #4AAF73}}>
                        <img src="recetario_icon.png" alt="Recetario_Icon_Grey" className="icon"></img>
                        <p className="section-name">Recetario</p>
                    </div>

                    <div class="container" style="background-color: #FDFBF5; border-bottom: 3px solid #FAD314;">
                        <img src="crear_receta_icon.png" alt="Crear_Icon_Grey" className="icon"></img>
                        <p className="section-name">Crear receta</p>
                    </div>

                    <div class="container" style="background-color: #FDFBF5; border-bottom: 3px solid #3E86C1;">
                        <img src="calendario_icon.png" alt="Calendario_Icon_Grey" className="icon"></img>
                        <p className="section-name">Calendario</p>
                    </div>

                    <div class="container" style="background-color: #FDFBF5; border-bottom: 3px solid #DC5F7D;">
                        <img src="compra_icon.png" alt="Compra_Icon_Grey" className="icon"></img>
                        <p className="section-name">Compra</p>
                    </div>

                </div>

                </div>
                

            }

        </header >

    );
}

export default OrangeHeader;