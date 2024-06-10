import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import styled from 'styled-components';
import { CompactPicker } from 'react-color';
import { FaFillDrip, FaParagraph, FaPalette } from 'react-icons/fa';
import { BiBorderOuter } from 'react-icons/bi';
import { PiSelectionBackgroundBold } from 'react-icons/pi';
import { IoMdResize } from 'react-icons/io';
import { MdTitle, MdFormatSize } from 'react-icons/md';
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

const sizeOptionsTitle = [
  { value: '18px', label: '18px' },
  { value: '20px', label: '20px' },
  { value: '22px', label: '22px' },
  { value: '24px', label: '24px' },
  { value: '26px', label: '26px' },
];

interface ToolbarProps {
  setBackgroundColor: (color: string) => void;
  setBorderColor: (color: string) => void;
  setFontColor: (color: string) => void;
  setFontFamilyTitle: (fontFamily: string) => void;
  setFontFamilyText: (fontFamily: string) => void;
  setFontSize: (fontSize: string) => void;
  setFontSizeTitle: (fontSize: string) => void;
  setBackgroundImage: (image: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  setBackgroundColor,
  setBorderColor,
  setFontColor,
  setFontFamilyTitle,
  setFontFamilyText,
  setFontSize,
  setFontSizeTitle,
  setBackgroundImage,
}) => {
  const [currentColorBackground, setCurrentColorBackground] = useState('#fdfbf5');
  const [currentColorFont, setCurrentColorFont] = useState('#4b4b4b');
  const [currentColorBorder, setCurrentColorBorder] = useState('#4b4b4b');
  const [currentFontFamilyTitle, setCurrentFontFamilyTitle] = useState('Caprasimo, sans-serif');
  const [currentFontFamilyText, setCurrentFontFamilyText] = useState('Jost, sans-serif');
  const [currentFontSize, setCurrentFontSize] = useState('16px');
  const [currentFontSizeTitle, setCurrentFontSizeTitle] = useState('22px');
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

  const handleOnChangeFontSize = (fontSize: SingleValue<{ value: string; label: string }>) => {
    if (fontSize) {
      setFontSize(fontSize.value);
    }
  };

  const handleOnChangeFontSizeTitle = (fontSizeTitle: SingleValue<{ value: string; label: string }>) => {
    if (fontSizeTitle) {
      setFontSizeTitle(fontSizeTitle.value);
    }
  };

  const handleOnChangeFontFamilyTitle = (fontFamily: SingleValue<{ value: string; label: string }>) => {
    if (fontFamily) {
      setCurrentFontFamilyTitle(fontFamily.value);
      setFontFamilyTitle(fontFamily.value);
      loadFont(fontFamily.value.split(',')[0]);
    }
  };

  const handleOnChangeFontFamilyText = (fontFamily: SingleValue<{ value: string; label: string }>) => {
    if (fontFamily) {
      setCurrentFontFamilyText(fontFamily.value);
      setFontFamilyText(fontFamily.value);
      loadFont(fontFamily.value.split(',')[0]);
    }
  };

  const handleBackgroundImageChange = (option: SingleValue<{ value: string; label: string }>) => {
    if (option) {
      setSelectedBackgroundImage(option);
      setBackgroundImage(option.value);
    }
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
        <MdTitle />
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
        <MdFormatSize />
        <Select
          value={{ value: currentFontSizeTitle, label: currentFontSizeTitle }}
          onChange={handleOnChangeFontSizeTitle}
          options={sizeOptionsTitle}
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
