import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Toolbar from '../components/CreateRecipe_Toolbar/CreateRecipe_Toolbar';
import { backgroundImageOptions } from '../components/CreateRecipe_Toolbar/CreateRecipe-BackgroundImages-Recipe';
import { RiImageAddFill } from 'react-icons/ri';
import './CreateRecipe.scss';
import { Modal_IMG } from '../components/CreateRecipe_IMG__modal/CreateRecipe_IMG__modal';
import { useReactToPrint } from 'react-to-print';

interface Recipe {
  title: string;
  image: string;
  ingredients: string[];
  steps: string;
  notes: string;
}

interface RecipeContainerProps {
  backgroundImage: string;
  borderColor: string;
  fontColor: string;
  fontSize: string;
  fontFamilyTitle: string;
  fontFamilyText: string;
}

const RecipeContainer = styled.div<RecipeContainerProps>`
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
const TitleFont = styled.h3<{ fontFamilyTitle: string; fontSizeTitle: string }>`
  font-family: ${props => props.fontFamilyTitle};
  font-size: ${props => props.fontSizeTitle};
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
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

export const CreateRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>({ title: '', image: '', ingredients: [], steps: '', notes: '' });
  const [backgroundColor, setBackgroundColor] = useState('#fdfbf5');
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(backgroundImageOptions()[0].value);
  const [borderColor, setBorderColor] = useState('#4b4b4b');
  const [fontColor, setFontColor] = useState('#4b4b4b');
  const [currentFontFamilyTitle, setCurrentFontFamilyTitle] = useState('Caprasimo,sans-serif');
  const [currentFontFamilyText, setCurrentFontFamilyText] = useState('Jost,sans-serif');
  const [fontSize, setFontSize] = useState('16px');
  const [fontSizeTitle, setFontSizeTitle] = useState('22px');
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<{ id: string; value: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);
  const backgroundImageUrl = currentBackgroundImage;

  // Imprimir el container

  const handlePrint = useReactToPrint({
    content: () => {
      const container = document.getElementById('print-container');
      const fileInputs = container.querySelectorAll('input[type="file"]');
      fileInputs.forEach(input => input.remove());
      const wrapper = document.createElement('div');
      wrapper.appendChild(container.cloneNode(true));
      return wrapper;
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe(prevRecipe => ({ ...prevRecipe, [name]: value }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
        setSelectedImage(undefined); // Clear selectedImage when a local image is chosen
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setImage(null); // Clear local image when an API image is chosen
    setImageUrl(undefined); // Clear imageUrl when an API image is chosen
    handleModalClose();
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { id: Date.now().toString(), value: inputValue }]);
      setInputValue('');
    }
  };

  const handleAddIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    addItem();
    e.stopPropagation();
  };

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        !document.querySelector('.cr-ingredients__title')?.contains(event.target as Node) &&
        !document.querySelector('.cr-ingredients__list')?.contains(event.target as Node)
      ) {
        setShowInput(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Toolbar
        setBackgroundColor={setBackgroundColor}
        setBorderColor={setBorderColor}
        setFontColor={setFontColor}
        setFontSize={setFontSize}
        setFontSizeTitle={setFontSizeTitle}
        setFontFamilyTitle={setCurrentFontFamilyTitle}
        setFontFamilyText={setCurrentFontFamilyText}
        setBackgroundImage={setCurrentBackgroundImage}
      />
      <div id="print-container">
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
            <TitleFont fontFamilyTitle={currentFontFamilyTitle} fontSizeTitle={fontSizeTitle}>
              <input
                className="createrecipe-inputMealTitle"
                placeholder="Your meal title"
                value={recipe.title}
                onChange={handleInputChange}
                name="title"
                style={{
                  backgroundColor,
                  color: fontColor,
                  fontSize: fontSizeTitle,
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
              <ImageContainer>
                {imageUrl || selectedImage ? (
                  <>
                    <Image src={imageUrl || selectedImage} alt="recipe-image" />
                    <ImageOverlay>
                      <button onClick={handleOpenModal}>Choose from API</button>
                      <label htmlFor="localImageUpload">
                        <input
                          type="file"
                          id="localImageUpload"
                          style={{ display: 'none' }}
                          onChange={handleImageChange}
                        />
                        Choose from Local
                      </label>
                    </ImageOverlay>
                  </>
                ) : (
                  <div>
                    <RiImageAddFill size={50} />
                    <input type="file" onChange={handleImageChange} />
                    <button onClick={handleOpenModal}>Search image</button>
                  </div>
                )}
              </ImageContainer>
              {isOpen && <Modal_IMG onClose={handleModalClose} onSelectImage={handleSelectImage} isOpen={isOpen} />}
            </SectionContainer>

            <SectionContainer
              backgroundColor={backgroundColor}
              fontColor={fontColor}
              fontSize={fontSize}
              fontFamilyText={currentFontFamilyText}
              className="cr-ingredients"
            >
              <div className="cr-ingredients__title" onClick={() => setShowInput(true)}>
                <TitleFont fontFamilyTitle={currentFontFamilyTitle} fontSizeTitle={fontSizeTitle}>
                  <h3 style={{ color: fontColor, fontSize: fontSizeTitle, fontFamily: currentFontFamilyTitle }}>
                    Ingredients
                  </h3>
                </TitleFont>
              </div>
              <div className="cr-ingredients__list">
                <ul className="cr-ingredients__ul">
                  {items.map(item => (
                    <li className="cr-ingredients__item cr-ingred-itemcontainer" style={{}} key={item.id}>
                      <TextFont fontFamilyText={currentFontFamilyText}>{item.value}</TextFont>
                      <button className="button__secondary-grey delete_btn" onClick={() => handleRemove(item.id)}>
                        -
                      </button>
                    </li>
                  ))}
                </ul>
                {showInput && (
                  <div className="cr-ingredients__input">
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
            <TitleFont fontFamilyTitle={currentFontFamilyTitle} fontSizeTitle={fontSizeTitle}>
              <h3 style={{ color: fontColor, fontSize: fontSizeTitle, fontFamily: currentFontFamilyTitle }}>
                Preparation
              </h3>
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
                  width: '100%',
                  border: 'none',
                  boxSizing: 'border-box',
                  minHeight: '100px',
                  padding: '10px',
                  resize: 'none',
                  overflow: 'auto',
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
            <TitleFont fontFamilyTitle={currentFontFamilyTitle} fontSizeTitle={fontSizeTitle}>
              <h3 style={{ color: fontColor, fontSize: fontSizeTitle, fontFamily: currentFontFamilyTitle }}>Notes</h3>
            </TitleFont>
            <TextFont fontFamilyText={currentFontFamilyText}>
              <textarea
                id="cr-notes"
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
                  width: '100%',
                  border: 'none',
                  boxSizing: 'border-box',
                  minHeight: '100px',
                  padding: '10px',
                  resize: 'none',
                  overflow: 'hidden',
                }}
              />
            </TextFont>
          </SectionContainer>
        </RecipeContainer>
      </div>
      <div className="cr-selection-btns">
        <button className="button__secondary-green" type="button" onClick={handlePrint}>
          Print
        </button>
        <button className="button__primary-green" type="button">
          Accept
        </button>
      </div>
    </>
  );
};
