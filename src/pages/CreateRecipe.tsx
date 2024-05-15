import React, { useState, useContext } from 'react';
import './CreateRecipe.scss';

export function CreateRecipe() {
  const [recipeBuilder, setRecipeBuilder] = useState<
    { id: number; title: string; input: string; value: string; image?: string }[]
  >([]);

  //   const userContext = React.createContext();
  //   const userToggleContext = React.createContext();
  // export function useUserContext() {
  //   return useContext(userContext);
  // }

  // export function useUserToggleContext() {
  //   return useContext(userToggleContext);
  // }

  return (
    <>
      <div className="createrecipe-inputMealTitle">
        <input placeholder="Your meal title"></input>
      </div>

      <div className="createrecipe-ingedientsAndImage">
        <div className="cr-image"></div>

        <div className="cr-ingredients">
          <div className="cr-ingredients__title">
            <h3>Ingredients</h3>
          </div>
          <div className="cr-ingredients__list">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="createrecipe-preparation">
        <div>
          <h3>Preparation</h3>
        </div>
        <div className="cr-steps">
          <input className="cr-steps__input" placeholder="Introduce the steps"></input>
        </div>
      </div>

      <div className="createrecipe-notes" placeholder="Any notes?"></div>
      <div className="cr-notes__title">
        <h3>Notes</h3>
      </div>
      <div className="cr-notes">
        <input className="cr-notes__input" placeholder="Any notes?"></input>
      </div>
    </>
  );
}

/* Funcionalidades para editar una receta
function handleEditRecipe(id) {
    
  }
*/
