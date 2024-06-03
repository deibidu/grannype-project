import React, { useState } from 'react';
import './CreateRecipe_Toolbar.scss';
import { TwitterPicker } from 'react-color';
import axios from 'axios';
import Select from 'react-select';
import styled from 'styled-components';
import { FaFillDrip, FaBorderStyle, FaFont, FaParagraph, FaTextHeight, FaPalette, FaImage } from 'react-icons/fa';

const fontOptionsTitle = [
  { value: 'yesteryear, sans-serif', label: 'Yesteryear' },
  { value: 'cookie, sans-serif', label: 'Cookie' },
  { value: 'yellowtail, sans-serif', label: 'Yellowtail' },
  { value: 'chicle, sans-serif', label: 'Chicle' },
  { value: 'righteous, serif', label: 'Righteous' },
  { value: 'pattaya, sans-serif', label: 'Pattaya' },
  { value: 'jost, sans-serif', label: 'Jost' },
  { value: 'parisienne, serif', label: 'Parisienne' },
  { value: 'atisfy, cursive', label: 'Satisfy' },
  { value: 'limelight, cursive', label: 'Limelight' },
  { value: 'losbter, sans-serif', label: 'Losbter' },
  { value: 'caprasimo, serif', label: 'Caprasimo' },
  { value: 'aira condensed, serif', label: 'Saira Condensed' },
];

const fontOptionsText = [
  { value: 'jost, sans-serif', label: 'Jost' },
  { value: 'oswald, sans-serif', label: 'Oswald' },
  { value: 'quicksand, sans-serif', label: 'Quicksand' },
  { value: 'noto-serif, serif', label: 'Noto Serif' },
  { value: 'gupter, serif', label: 'Gupter' },
  { value: 'cabin, sans-serif', label: 'Cabin' },
];

const sizeOptions = [
  { value: '12px', label: '12px' },
  { value: '14px', label: '14px' },
  { value: '16px', label: '16px' },
  { value: '18px', label: '18px' },
  { value: '20px', label: '20px' },
];

type ColorPickerType = 'background' | 'border' | 'font' | 'font-family-title' | 'font-family-text' | 'font-size';

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
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [colorPickerType, setColorPickerType] = useState<ColorPickerType | null>(null);
  const [currentColorBackground, setCurrentColorBackground] = useState('#fdfbf5');
  const [currentColorFont, setCurrentColorFont] = useState('#4b4b4b');
  const [currentColorBorder, setCurrentColorBorder] = useState('#4b4b4b');
  const [currentFontFamilyTitle, setCurrentFontFamilyTitle] = useState('yesteryear,sans-serif');
  const [currentFontFamilyText, setCurrentFontFamilyText] = useState('jost, sans-serif');
  const [currentFontSize, setCurrentFontSize] = useState('16px');
  const [backgroundImage, setBackgroundImageState] = useState<string | null>(null);

  const handleOnChangeFontSize = (fontSize: any) => {
    setCurrentFontSize(fontSize.value);
    setFontSize(fontSize.value);
  };

  const handleOnChangeFontFamilyTitle = (fontFamily: any) => {
    setCurrentFontFamilyTitle(fontFamily.value);
    setFontFamilyTitle(fontFamily.value);
  };

  const handleOnChangeFontFamilyText = (fontFamily: any) => {
    setCurrentFontFamilyText(fontFamily.value);
    setFontFamilyText(fontFamily.value);
  };

  const handleOnChangeBackground = (color: any) => {
    setCurrentColorBackground(color.hex);
    setBackgroundColor(color.hex);
  };

  const handleOnChangeBorder = (color: any) => {
    setCurrentColorBorder(color.hex);
    setBorderColor(color.hex);
  };

  const handleOnChangeFont = (color: any) => {
    setCurrentColorFont(color.hex);
    setFontColor(color.hex);
  };

  const handleColorPickerClick = (type: ColorPickerType) => {
    setShowColorPicker(true);
    setColorPickerType(type);
  };

  const handleCloseColorPicker = () => {
    setShowColorPicker(false);
    setColorPickerType(null);
  };

  const handleBackgroundImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      const imageUrl = URL.createObjectURL(image);
      setBackgroundImageState(imageUrl);
      setBackgroundImage(imageUrl);
    }
  };

  return (
    <div className="toolbar">
      <div className="toolbar-button">
        <FaFillDrip onClick={() => handleColorPickerClick('background')} />
        {showColorPicker && colorPickerType === 'background' && (
          <TwitterPicker
            color={currentColorBackground}
            onChangeComplete={handleOnChangeBackground}
            style={{ position: 'absolute', zIndex: 1 }}
            onClose={handleCloseColorPicker}
          />
        )}
      </div>
      <div className="toolbar-button">
        <FaBorderStyle onClick={() => handleColorPickerClick('border')} />
        {showColorPicker && colorPickerType === 'border' && (
          <TwitterPicker
            color={currentColorBorder}
            onChangeComplete={handleOnChangeBorder}
            style={{ position: 'absolute', zIndex: 1 }}
            onClose={handleCloseColorPicker}
          />
        )}
      </div>
      <div className="toolbar-button">
        <FaPalette onClick={() => handleColorPickerClick('font')} />
        {showColorPicker && colorPickerType === 'font' && (
          <TwitterPicker
            color={currentColorFont}
            onChangeComplete={handleOnChangeFont}
            style={{ position: 'absolute', zIndex: 1 }}
            onClose={handleCloseColorPicker}
          />
        )}
      </div>
      <div className="toolbar-button">
        <FaFont onClick={() => handleColorPickerClick('font-family-title')} />
        {showColorPicker && colorPickerType === 'font-family-title' && (
          <Select
            options={fontOptionsTitle}
            value={fontOptionsTitle.find(option => option.value === currentFontFamilyTitle)}
            onChange={handleOnChangeFontFamilyTitle}
            onBlur={handleCloseColorPicker}
          />
        )}
      </div>
      <div className="toolbar-button">
        <FaParagraph onClick={() => handleColorPickerClick('font-family-text')} />
        {showColorPicker && colorPickerType === 'font-family-text' && (
          <Select
            options={fontOptionsText}
            value={fontOptionsText.find(option => option.value === currentFontFamilyText)}
            onChange={handleOnChangeFontFamilyText}
            onBlur={handleCloseColorPicker}
          />
        )}
      </div>
      <div className="toolbar-button">
        <FaTextHeight onClick={() => handleColorPickerClick('font-size')} />
        {showColorPicker && colorPickerType === 'font-size' && (
          <Select
            options={sizeOptions}
            value={sizeOptions.find(option => option.value === currentFontSize)}
            onChange={handleOnChangeFontSize}
            onBlur={handleCloseColorPicker}
          />
        )}
      </div>
      <div className="toolbar-button">
        <FaImage onClick={() => document.getElementById('background-image-input')?.click()} />
        <input
          id="background-image-input"
          type="file"
          accept="image/*"
          onChange={handleBackgroundImageChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default Toolbar;
