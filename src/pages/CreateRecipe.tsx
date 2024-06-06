import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Toolbar from '../components/CreateRecipe_Toolbar/CreateRecipe_Toolbar';
import { backgroundImageOptions } from '../components/CreateRecipe_Toolbar/CreateRecipe-BackgroundImages-Recipe';
import { RiImageAddFill } from 'react-icons/ri';
import './CreateRecipe.scss';
import { Modal_IMG } from '../components/CreateRecipe_IMG__modal/CreateRecipe_IMG__modal';

interface Recipe {
  title: string;
  image: string;
  ingredients: string[];
  steps: string;
  notes: string;
}

const RecipeContainer = styled.div<{
  backgroundImage: string;
  borderColor: string;
  fontColor: string;
  fontSize: string;
  fontFamilyTitle: string;
  fontFamilyText: string;
}>`
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 10px solid ${props => props.borderColor};
  border-radius: 8px;
  padding: 50px;
  margin: 40px auto;
  width: 800px;
  color: ${props => props.fontColor};
  font-family: ${props => props.fontFamilyText};
  font-size: ${props => props.fontSize};

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

const SectionContainer = styled.div<{
  backgroundColor: string;
  fontColor: string;
  fontSize: string;
  fontFamilyText: string;
}>`
  background-color: ${props => props.backgroundColor};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamilyText};
`;

export const CreateRecipe: React.FC = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [recipe, setRecipe] = useState<Recipe>({ title: '', image: '', ingredients: [''], steps: '', notes: '' });
  const [backgroundColor, setBackgroundColor] = useState('#fdfbf5');
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(backgroundImageOptions()[0].value);
  const [borderColor, setBorderColor] = useState('#4b4b4b');
  const [fontColor, setFontColor] = useState('#4b4b4b');
  const [currentFontFamilyTitle, setCurrentFontFamilyTitle] = useState('limelight, sans-serif');
  const [currentFontFamilyText, setCurrentFontFamilyText] = useState('jost, sans-serif');
  const [fontSize, setFontSize] = useState('16px');
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const backgroundImageUrl = currentBackgroundImage;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
    setTitle(value);
  };

  // añadir imagenes
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [imageUrlFromInternet, setImageUrlFromInternet] = useState<string | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

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
      setInputValue('');
    }
  };

  const handleAddIngredient = () => {
    addItem();
    e.stopPropagation();
  };

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!event.target.closest('.cr-ingredients__title') && !event.target.closest('.cr-ingredients__list')) {
        setShowInput(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showInput]);

  return (
    <>
      <Toolbar
        setBackgroundColor={setBackgroundColor}
        setBorderColor={setBorderColor}
        setFontColor={setFontColor}
        setFontSize={setFontSize}
        setFontFamilyTitle={setCurrentFontFamilyTitle}
        setFontFamilyText={setCurrentFontFamilyText}
        setBackgroundImage={setCurrentBackgroundImage}
      />
      <RecipeContainer
        borderColor={borderColor}
        fontColor={fontColor}
        fontSize={fontSize}
        fontFamilyTitle={currentFontFamilyTitle}
        fontFamilyText={currentFontFamilyText}
        backgroundImage={backgroundImageUrl}
      >
        <SectionContainer
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          fontSize={fontSize}
          fontFamilyText={currentFontFamilyText}
          style={{ padding: 0 }}
        >
          <TitleFont fontFamilyTitle={currentFontFamilyTitle}>
            <input
              className="createrecipe-inputMealTitle"
              placeholder="Your meal title"
              value={recipe.title}
              onChange={handleInputChange}
              name="title"
              style={{
                backgroundColor,
                color: fontColor,
                fontSize,
                fontFamily: currentFontFamilyTitle,
              }}
            />
          </TitleFont>
        </SectionContainer>

        <div className="createrecipe-ingedientsAndImage">
          <SectionContainer
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            fontSize={fontSize}
            fontFamilyText={currentFontFamilyText}
            className="cr-image"
          >
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
          </SectionContainer>
          <SectionContainer
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            fontSize={fontSize}
            fontFamilyText={currentFontFamilyText}
            className="cr-ingredients"
          >
            <div className="cr-ingredients__title" onClick={() => setShowInput(true)}>
              <TitleFont fontFamilyTitle={currentFontFamilyTitle}>
                <h3 style={{ color: fontColor, fontSize, fontFamily: currentFontFamilyTitle }}>Ingredients</h3>
              </TitleFont>
            </div>
            <div className="cr-ingredients__list">
              <ul className="cr-ingredients__ul">
                {items.map(item => (
                  <li className="cr-ingredients__item" key={item.id}>
                    <TextFont fontFamilyText={currentFontFamilyText}>{item.value}</TextFont>
                    <button className="button__secondary-grey delete_btn" onClick={() => handleRemove(item.id)}>
                      -
                    </button>
                  </li>
                ))}
              </ul>
              {showInput && (
                <div className="cr-ingredients__item">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    style={{ color: fontColor, fontSize, fontFamily: currentFontFamilyText }}
                    onClick={e => e.stopPropagation()}
                  />
                  <button className="button__secondary-grey" type="button" onClick={handleAddIngredient}>
                    Add
                  </button>
                </div>
              )}
            </div>
          </SectionContainer>
        </div>

        <SectionContainer
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          fontSize={fontSize}
          fontFamilyText={currentFontFamilyText}
          className="createrecipe-preparation"
        >
          <TitleFont fontFamilyTitle={currentFontFamilyTitle}>
            <h3 style={{ color: fontColor, fontSize, fontFamily: currentFontFamilyTitle }}>Preparation</h3>
          </TitleFont>
          <TextFont fontFamilyText={currentFontFamilyText}>
            <textarea
              className="cr-steps"
              placeholder="Introduce the steps"
              value={recipe.steps}
              onChange={handleInputChange}
              name="steps"
              style={{
                fontFamily: currentFontFamilyText,
                backgroundColor,
                color: fontColor,
                fontSize,
              }}
            />
          </TextFont>
        </SectionContainer>
        <SectionContainer
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          fontSize={fontSize}
          fontFamilyText={currentFontFamilyText}
          className="createrecipe-notes"
        >
          <TitleFont fontFamilyTitle={currentFontFamilyTitle}>
            <h3 style={{ color: fontColor, fontSize, fontFamily: currentFontFamilyTitle }}>Notes</h3>
          </TitleFont>
          <TextFont fontFamilyText={currentFontFamilyText}>
            <textarea
              className="cr-notes"
              placeholder="Any notes?"
              value={recipe.notes}
              onChange={handleInputChange}
              name="notes"
              style={{
                fontFamily: currentFontFamilyText,
                backgroundColor,
                color: fontColor,
                fontSize,
              }}
            />
          </TextFont>
        </SectionContainer>
      </RecipeContainer>
      <div className="cr-selection-btns">
        <button className="button__secondary-green" type="button">
          Print
        </button>
        <button className="button__primary-green" type="button">
          Accept
        </button>
      </div>
    </>
  );
};
