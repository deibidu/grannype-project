import './Home.scss';

import TartaDeCerezas from '../assets/images/pastelcerezas 1.jpg';
import arrowIcon from '../assets/images/arrow-up-orange.svg';

export const Home = () => {
  return (
    <>
      <h1 className={'font-title-sections'}>Your recipes are waiting for you</h1>
      <div className="widgets-Home">
        <div className="Home_widgetCard">
          <div className="Home_lastRecipes__container">
            <div className="recipe-item">
              <img src={TartaDeCerezas} alt="Recipe" className="recipe-image" />
              <div className="recipe-content">
                <span className="recipe-title">Tarta de Cerezas</span>
                <img src={arrowIcon} alt="Go to recipe" className="recipe-arrow" />
              </div>
            </div>
          </div>
        </div>

        <div className="Home_CalendarAndShoppingList">
          <div className="Home_widgetCard">
            <div className="Home_widgetTitle">
              <h3>Meals for today</h3>
            </div>
            <div className="Home_widgetContainer">
              <div className="Home_meal">
                Gachas con Arándanos
                <img src={arrowIcon} alt="Go to recipe" className="recipe-arrow" />
              </div>
              <div className="Home_meal">
                Paella
                <img src={arrowIcon} alt="Go to recipe" className="recipe-arrow" />
              </div>
            </div>
          </div>
          <div className="Home_widgetCard">
            <div className="Home_widgetTitle">
              <h3>Shopping List</h3>
            </div>
            <ul className="Home_widgetContainer">
              <li>
                Tomate <input type="checkbox" />
              </li>
              <li>
                Aceite <input type="checkbox" />
              </li>
              <li>
                Patatas <input type="checkbox" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
