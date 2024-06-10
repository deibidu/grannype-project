import './Home.scss';

export const Home = () => {
  return (
    <>
      <h1 className={'font-title-sections'}>Your recipes are waiting for you</h1>
      <div className="widgets-Home">
        <div className="Home_widgetCard">
          <div className="Home_lastRecipes__container">
            <p className="Home_widgetContainer">There's no recipes</p>
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
