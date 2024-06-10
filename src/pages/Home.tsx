import './Home.scss';
import photoRecipeExample1 from '../assets/images/examplePhotoRecipe1.jpg';
import photoRecipeExample2 from '../assets/images/examplePhotoRecipe2.jpg';
import photoRecipeExample3 from '../assets/images/examplePhotoRecipe3.jpg';
import arrowIconOrange from '../assets/images/arrowIconOrange.svg';

export const Home = () => {
  return (
    <>
      <h1 className={'font-title-sections'}>Your recipes are waiting for you</h1>
      <div className="widgets-Home">
        <div className="Home_widgetCard--no-border">
          <div className="Home_lastRecipes__container">
            <div className="recipe-item">
              <img src={photoRecipeExample1} alt="Recipe" className="recipe-image" />
              <div className="recipe-content">
                <span className="recipe-title">Ensalada César con aguacate</span>
                <img src={arrowIconOrange} alt="Go to recipe" className="recipe-arrow" />
              </div>
            </div>
            <div className="recipe-item">
              <img src={photoRecipeExample2} alt="Recipe" className="recipe-image" />
              <div className="recipe-content">
                <span className="recipe-title">Tortitas con nata y fresas</span>
                <img src={arrowIconOrange} alt="Go to recipe" className="recipe-arrow" />
              </div>
            </div>
            <div className="recipe-item">
              <img src={photoRecipeExample3} alt="Recipe" className="recipe-image" />
              <div className="recipe-content">
                <span className="recipe-title">Especias caseras</span>
                <img src={arrowIconOrange} alt="Go to recipe" className="recipe-arrow" />
              </div>
            </div>
          </div>
        </div>

        <div className="Home_CalendarAndShoppingList">
          <div className="Home_widgetCard">
            <div className="Home_widgetTitle">
              <h3>Meals for today</h3>
            </div>
            <p className="Home_widgetContainer">There's no meals for today</p>
          </div>
          <div className="Home_widgetCard">
            <div className="Home_widgetTitle">
              <h3>Shopping List</h3>
            </div>
            <p className="Home_widgetContainer">There's nothing to buy today</p>
          </div>
        </div>
      </div>
    </>
  );
};
