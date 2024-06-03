import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Toolbar from '../components/CreateRecipe_Toolbar/CreateRecipe_Toolbar';
import { RiImageAddFill } from 'react-icons/ri';
import './CreateRecipe.scss';
import { Modal_IMG } from '../components/CreateRecipe_IMG__modal/CreateRecipe_IMG__modal';
import useGoogleFonts from 'react-google-fonts';

interface Recipe {
  title: string;
  image: string;
  ingredients: string[];
  steps: string;
  notes: string;
}

const RecipeContainer = styled.div<{
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
  fontFamilyTitle: string;
  fontFamilyText: string;
  fontSize: string;
}>`
  background-color: ${props => props.backgroundColor};
  border: 3px solid ${props => props.borderColor};
  color: ${props => props.fontColor};
  font-family-title: ${props => props.fontFamilyTitle};
  font-family-text: ${props => props.fontFamilyText};
  font-size: ${props => props.fontSize};
  padding: 24px;
  margin: 40px auto;
  width: 800px;
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamilyText};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.fontFamilyTitle};
  }
`;

const TitleFont = styled.h3<{ fontFamilyTitle: string }>`
  font-family: ${props => props.fontFamilyTitle};
`;

const TextFont = styled.p<{ fontFamilyText: string }>`
  font-family: ${props => props.fontFamilyText};
`;

export const CreateRecipe: React.FC = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [recipe, setRecipe] = useState<Recipe>({ title: '', image: '', ingredients: [''], steps: '', notes: '' });
  const [backgroundColor, setBackgroundColor] = useState('#fdfbf5');
  const [borderColor, setBorderColor] = useState('#4b4b4b');
  const [fontColor, setFontColor] = useState('#4b4b4b');
  const [currentFontFamilyTitle, setCurrentFontFamilyTitle] = useState('yesteryear, sans-serif');
  const [currentFontFamilyText, setCurrentFontFamilyText] = useState('jost, sans-serif');
  const [fontSize, setFontSize] = useState('16px');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  // añadir imagenes
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [imageUrlFromInternet, setImageUrlFromInternet] = useState<string | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  // función para manejar el cambio de imagen
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // función para manejar la búsqueda de imagen en Internet

  const handleSelectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    handleModalClose();
  };

  const handleSearchImage = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  // lista de ingredientes
  const [items, setItems] = useState<{ id: string; value: string }[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { id: Date.now().toString(), value: inputValue }]);
      setInputValue(' ');
    }
  };

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <Toolbar
        recipeBuilder={{ title, image, ingredients, steps: recipe.steps, notes: recipe.notes }}
        setRecipeBuilder={(updatedRecipe: Recipe) => {
          setRecipe(updatedRecipe);
          setTitle(updatedRecipe.title);
          setIngredients(updatedRecipe.ingredients);
        }}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        fontColor={fontColor}
        fontSize={fontSize}
        fontFamilyTitle={currentFontFamilyTitle}
        fontFamilyText={currentFontFamilyText}
        setBackgroundColor={setBackgroundColor}
        setBorderColor={setBorderColor}
        setFontColor={setFontColor}
        setFontSize={setFontSize}
        setFontFamilyTitle={setCurrentFontFamilyTitle}
        setFontFamilyText={setCurrentFontFamilyText}
      />
      <RecipeContainer
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        fontColor={fontColor}
        fontSize={fontSize}
        fontFamilyTitle={currentFontFamilyTitle}
        fontFamilyText={currentFontFamilyText}
      >
        <div>
          <TitleFont fontFamilyTitle={currentFontFamilyTitle}>
            <input
              className="createrecipe-inputMealTitle"
              placeholder="Your meal title"
              value={recipe.title}
              onChange={handleInputChange}
              name="title"
            />
          </TitleFont>
        </div>

        <div className="createrecipe-ingedientsAndImage">
          <div className="cr-image">
            {imageUrl ? (
              <img src={imageUrl} alt="recipe-image" />
            ) : selectedImage ? (
              <img src={selectedImage} alt="recipe-image" />
            ) : (
              <RiImageAddFill />
            )}
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleSearchImage}>Search image</button>
            <Modal_IMG isOpen={isOpen} onClose={handleModalClose} onSelectImage={handleSelectImage} />
          </div>
          <div className="cr-ingredients">
            <div className="cr-ingredients__title">
              <TitleFont fontFamilyTitle={currentFontFamilyTitle}>
                <h3>Ingredients</h3>
              </TitleFont>
            </div>
            <div className="cr-ingredients__list">
              <ul>
                {items.map(item => (
                  <li className="cr-ingredients__item" key={item.id}>
                    <TextFont fontFamilyText={currentFontFamilyText}>{item.value}</TextFont>
                    <button className="button__secondary-grey delete_btn" onClick={() => handleRemove(item.id)}>
                      -
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cr-ingredients__item">
              <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
              <button className="button__secondary-grey" type="submit" onClick={addItem}>
                Add Ingredient
              </button>
            </div>
          </div>
        </div>

        <div className="createrecipe-preparation">
          <div>
            <TitleFont fontFamilyTitle={currentFontFamilyTitle}>
              <h3>Preparation</h3>
            </TitleFont>
          </div>
          <div className="cr-steps">
            <TextFont fontFamilyText={currentFontFamilyText}>
              <textarea
                className="cr-steps__input"
                placeholder="Introduce the steps"
                value={recipe.steps}
                onChange={handleInputChange}
                name="steps"
                style={{ fontFamily: currentFontFamilyText }}
              />
            </TextFont>
          </div>
        </div>
        <div className="createrecipe-notes">
          <div className="cr-notes__title">
            <TitleFont fontFamilyTitle={currentFontFamilyTitle}>
              <h3>Notes</h3>
            </TitleFont>
          </div>
          <div className="cr-notes">
            <TextFont fontFamilyText={currentFontFamilyText}>
              <textarea
                className="cr-notes__input"
                placeholder="Any notes?"
                value={recipe.notes}
                onChange={handleInputChange}
                name="notes"
                style={{ fontFamily: currentFontFamilyText }}
              />
            </TextFont>
          </div>
        </div>
      </RecipeContainer>
      <div className="cr-selection-btns">
        <button className="button__secondary-green" type={'submit'}>
          Print
        </button>
        <button className="button__primary-green" type={'submit'}>
          Accept
        </button>
      </div>
    </>
  );
};
