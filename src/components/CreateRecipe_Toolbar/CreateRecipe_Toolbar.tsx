import React, { useState } from 'react';
import './CreateRecipe_Toolbar.scss';
import { SketchPicker } from 'react-color';
import Select from 'react-select';
import styled from 'styled-components';
import { FaFillDrip, FaBorderStyle, FaFont, FaTextHeight, FaPalette } from 'react-icons/fa';

const fontOptionsTitle = [
  { value: 'yesterday, sans-serif', label: 'Yesterday' },
  { value: 'cookie, sans-serif', label: 'Cookie' },
  { value: 'yellowtail, sans-serif', label: 'Yellowtail' },
  { value: 'chicle, sans-serif', label: 'Chicle' },
  { value: 'rightcous, serif', label: 'Rightcous' },
  { value: 'pattaya, sans-serif', label: 'Pattaya' },
  { value: 'jost, sans-serif', label: 'Jost' },
  { value: 'parisenne, serif', label: 'Parisenne' },
  { value: 'satisfy, cursive', label: 'Satisfy' },
  { value: 'limelight, cursive', label: 'Limelight' },
  { value: 'losbter, sans-serif', label: 'Losbter' },
  { value: 'caprasimo, serif', label: 'Caprasimo' },
];

const fontOptionsText = [
  { value: 'jost, sans-serif', label: 'Jost' },
  { value: 'oswald, sans-serif', label: 'Oswald' },
  { value: 'quicksand, sans-serif', label: 'Quicksand' },
  { value: 'noto-serif, serif', label: 'Noto Serif' },
  { value: 'times-new-roman, serif', label: 'Times New Roman' },
  { value: 'gill-sans, sans-serif', label: 'Gill Sans' },
];

const sizeOptions = [
  { value: '12px', label: '12px' },
  { value: '14px', label: '14px' },
  { value: '16px', label: '16px' },
  { value: '18px', label: '18px' },
  { value: '20px', label: '20px' },
];

type ColorPickerType = 'background' | 'border' | 'font' | 'font-family' | 'font-size';

interface ToolbarProps {
  setBackgroundColor: (color: string) => void;
  setBorderColor: (color: string) => void;
  setFontColor: (color: string) => void;
  setFontFamily: (fontFamily: string) => void;
  setFontSize: (fontSize: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  setBackgroundColor,
  setBorderColor,
  setFontColor,
  setFontFamily,
  setFontSize,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [colorPickerType, setColorPickerType] = useState<ColorPickerType | null>(null);

  const handleColorPickerClick = (type: ColorPickerType) => {
    setShowColorPicker(true);
    setColorPickerType(type);
  };

  const handleCloseColorPicker = () => {
    setShowColorPicker(false);
    setColorPickerType(null);
  };

  return (
    <div className="toolbar">
      <div className="toolbar-button">
        <FaFillDrip onClick={() => handleColorPickerClick('background')} />
        {showColorPicker && colorPickerType === 'background' && (
          <SketchPicker
            onChangeComplete={color => setBackgroundColor(color.hex)}
            style={{ position: 'absolute', zIndex: 1 }}
            onClose={handleCloseColorPicker}
          />
        )}
      </div>
      <div className="toolbar-button">
        <FaBorderStyle onClick={() => handleColorPickerClick('border')} />
        {showColorPicker && colorPickerType === 'border' && (
          <SketchPicker
            onChangeComplete={color => setBorderColor(color.hex)}
            style={{ position: 'absolute', zIndex: 1 }}
            onClose={handleCloseColorPicker}
          />
        )}
      </div>
      <div className="toolbar-button">
        <FaPalette onClick={() => handleColorPickerClick('font')} />
        {showColorPicker && colorPickerType === 'font' && (
          <SketchPicker
            onChangeComplete={color => setFontColor(color.hex)}
            style={{ position: 'absolute', zIndex: 1 }}
            onClose={handleCloseColorPicker}
          />
        )}
      </div>
      <div className="toolbar-button">
        <FaFont onClick={() => handleColorPickerClick('font-family')} />
        {showColorPicker && colorPickerType === 'font-family' && (
          <Select
            options={fontOptionsTitle}
            defaultValue={fontOptionsTitle[0]}
            onChange={option => setFontFamily(option.value)}
            onBlur={handleCloseColorPicker}
          />
        )}
      </div>
      <div className="toolbar-button">
        <FaTextHeight onClick={() => handleColorPickerClick('font-size')} />
        {showColorPicker && colorPickerType === 'font-size' && (
          <Select
            options={sizeOptions}
            defaultValue={sizeOptions[2]}
            onChange={option => setFontSize(option.value)}
            onBlur={handleCloseColorPicker}
          />
        )}
      </div>
    </div>
  );
};

export default Toolbar;
