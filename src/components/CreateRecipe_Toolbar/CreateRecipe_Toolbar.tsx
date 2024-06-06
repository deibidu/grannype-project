import React, { useState } from 'react';
import Select from 'react-select';
import { CompactPicker } from 'react-color';
import { FaFillDrip, FaFont, FaParagraph, FaPalette } from 'react-icons/fa';
import { BiBorderOuter } from 'react-icons/bi';
import { PiSelectionBackgroundBold } from 'react-icons/pi';
import { IoMdResize } from 'react-icons/io';
import WebFont from 'webfontloader';
import { backgroundImageOptions } from './CreateRecipe-BackgroundImages-Recipe';
import { fontOptionsTitle, fontOptionsText } from './CreateRecipes-Toolbar__fonts';
import './CreateRecipe_Toolbar.scss';

const sizeOptions = [
  { value: '12px', label: '12px' },
  { value: '14px', label: '14px' },
  { value: '16px', label: '16px' },
  { value: '18px', label: '18px' },
  { value: '20px', label: '20px' },
];

interface ToolbarProps {
  setBackgroundColor: (color: string) => void;
  setBorderColor: (color: string) => void;
  setFontColor: (color: string) => void;
  setFontFamilyTitle: (fontFamily: string) => void;
  setFontFamilyText: (fontFamily: string) => void;
  setFontSize: (fontSize: string) => void;
  setBackgroundImage: (image: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  setBackgroundColor,
  setBorderColor,
  setFontColor,
  setFontFamilyTitle,
  setFontFamilyText,
  setFontSize,
  setBackgroundImage,
}) => {
  const [currentColorBackground, setCurrentColorBackground] = useState('#fdfbf5');
  const [currentColorFont, setCurrentColorFont] = useState('#4b4b4b');
  const [currentColorBorder, setCurrentColorBorder] = useState('#4b4b4b');
  const [currentFontFamilyTitle, setCurrentFontFamilyTitle] = useState('yesteryear,sans-serif');
  const [currentFontFamilyText, setCurrentFontFamilyText] = useState('jost, sans-serif');
  const [currentFontSize, setCurrentFontSize] = useState('16px');
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState(backgroundImageOptions()[0]);

  const loadFont = (family: string) => {
    console.log(`Loading font: ${family}`); // Añadir un log para verificar la carga de fuentes
    WebFont.load({
      google: {
        families: [family],
      },
      active: () => {
        console.log(`Font loaded: ${family}`); // Añadir un log para verificar que la fuente se ha cargado
      },
      inactive: () => {
        console.log(`Failed to load font: ${family}`); // Añadir un log para verificar que la fuente no se ha podido cargar
      },
    });
  };

  const handleOnChangeFontSize = (fontSize: { value: string; label: string }) => {
    setCurrentFontSize(fontSize.value);
    setFontSize(fontSize.value);
  };

  const handleOnChangeFontFamilyTitle = (fontFamily: { value: string; label: string }) => {
    setCurrentFontFamilyTitle(fontFamily.value);
    setFontFamilyTitle(fontFamily.value);
    loadFont(fontFamily.value.split(',')[0]); // Cargar la fuente
  };

  const handleOnChangeFontFamilyText = (fontFamily: { value: string; label: string }) => {
    setCurrentFontFamilyText(fontFamily.value);
    setFontFamilyText(fontFamily.value);
    loadFont(fontFamily.value.split(',')[0]); // Cargar la fuente
  };

  const handleBackgroundImageChange = (option: { value: string; label: string }) => {
    setSelectedBackgroundImage(option);
    setBackgroundImage(option.value);
  };

  return (
    <div className="toolbar">
      <div className="toolbar-button">
        <PiSelectionBackgroundBold onClick={() => document.getElementById('background-image-input')?.click()} />
        <Select
          options={backgroundImageOptions()}
          value={selectedBackgroundImage}
          onChange={handleBackgroundImageChange}
        />
      </div>
      <div className="toolbar-button">
        <BiBorderOuter />
        <CompactPicker
          color={currentColorBorder}
          onChangeComplete={color => {
            setCurrentColorBorder(color.hex);
            setBorderColor(color.hex);
          }}
        />
      </div>
      <div className="toolbar-button">
        <FaFillDrip />
        <CompactPicker
          color={currentColorBackground}
          onChangeComplete={color => {
            setCurrentColorBackground(color.hex);
            setBackgroundColor(color.hex);
          }}
        />
      </div>

      <div className="toolbar-button">
        <FaPalette />
        <CompactPicker
          color={currentColorFont}
          onChangeComplete={color => {
            setCurrentColorFont(color.hex);
            setFontColor(color.hex);
          }}
        />
      </div>
      <div className="toolbar-button">
        <FaFont />
        <Select
          value={{ value: currentFontFamilyTitle, label: currentFontFamilyTitle }}
          onChange={handleOnChangeFontFamilyTitle}
          options={fontOptionsTitle}
        />
      </div>
      <div className="toolbar-button">
        <FaParagraph />
        <Select
          value={{ value: currentFontFamilyText, label: currentFontFamilyText }}
          onChange={handleOnChangeFontFamilyText}
          options={fontOptionsText}
        />
      </div>
      <div className="toolbar-button">
        <IoMdResize />
        <Select
          value={{ value: currentFontSize, label: currentFontSize }}
          onChange={handleOnChangeFontSize}
          options={sizeOptions}
        />
      </div>
    </div>
  );
};

export default Toolbar;
