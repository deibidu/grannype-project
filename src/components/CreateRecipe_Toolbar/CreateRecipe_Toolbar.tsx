import React, { useState, useMemo } from 'react';
import Select, { SingleValue } from 'react-select';
import { SketchPicker } from 'react-color';
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
  const currentFontSize = useMemo(() => '16px', []);
  const currentFontSizeTitle = useMemo(() => '22px', []);
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState(backgroundImageOptions()[0]);

  const [displayColorPicker, setDisplayColorPicker] = useState({
    backgroundColor: false,
    borderColor: false,
    fontColor: false,
  });

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

  const handleColorPickerClose = (picker: keyof typeof displayColorPicker) => {
    setDisplayColorPicker({ ...displayColorPicker, [picker]: false });
  };

  const handleColorPickerOpen = (picker: keyof typeof displayColorPicker) => {
    setDisplayColorPicker({ ...displayColorPicker, [picker]: true });
  };

  return (
    <div className="toolbar">
      <div className="toolbar-button">
        <PiSelectionBackgroundBold onClick={() => document.getElementById('background-image-input')?.click()} />
        <label className="toolbar-label">Image Background</label>
        <Select
          options={backgroundImageOptions()}
          value={selectedBackgroundImage}
          onChange={handleBackgroundImageChange}
        />
      </div>
      <div className="toolbar-button">
        <BiBorderOuter />
        <label className="toolbar-label">Color Border</label>
        <div>
          <div
            style={{
              padding: '18px 32px',
              background: currentColorBorder,
              borderRadius: '4px',
              boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            onClick={() => handleColorPickerOpen('borderColor')}
          />
          {displayColorPicker.borderColor ? (
            <div style={{ position: 'absolute', zIndex: '2' }}>
              <div
                style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }}
                onClick={() => handleColorPickerClose('borderColor')}
              />
              <SketchPicker
                color={currentColorBorder}
                onChange={color => {
                  setCurrentColorBorder(color.hex);
                  setBorderColor(color.hex);
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="toolbar-button">
        <FaFillDrip />
        <label className="toolbar-label">Color Background Container</label>
        <div>
          <div
            style={{
              padding: '18px 32px',
              background: currentColorBackground,
              borderRadius: '4px',
              boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            onClick={() => handleColorPickerOpen('backgroundColor')}
          />
          {displayColorPicker.backgroundColor ? (
            <div style={{ position: 'absolute', zIndex: '2' }}>
              <div
                style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }}
                onClick={() => handleColorPickerClose('backgroundColor')}
              />
              <SketchPicker
                color={currentColorBackground}
                onChange={color => {
                  setCurrentColorBackground(color.hex);
                  setBackgroundColor(color.hex);
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="toolbar-button">
        <FaPalette />
        <label className="toolbar-label">Color Text</label>
        <div>
          <div
            style={{
              padding: '18px 32px',
              background: currentColorFont,
              borderRadius: '4px',
              boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            onClick={() => handleColorPickerOpen('fontColor')}
          />
          {displayColorPicker.fontColor ? (
            <div style={{ position: 'absolute', zIndex: '2' }}>
              <div
                style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }}
                onClick={() => handleColorPickerClose('fontColor')}
              />
              <SketchPicker
                color={currentColorFont}
                onChange={color => {
                  setCurrentColorFont(color.hex);
                  setFontColor(color.hex);
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="toolbar-button">
        <MdTitle />
        <label className="toolbar-label">Font Title</label>
        <Select
          value={{ value: currentFontFamilyTitle, label: currentFontFamilyTitle }}
          onChange={handleOnChangeFontFamilyTitle}
          options={fontOptionsTitle}
        />
      </div>
      <div className="toolbar-button">
        <FaParagraph />
        <label className="toolbar-label">Font Text</label>
        <Select
          value={{ value: currentFontFamilyText, label: currentFontFamilyText }}
          onChange={handleOnChangeFontFamilyText}
          options={fontOptionsText}
        />
      </div>
      <div className="toolbar-button">
        <MdFormatSize />
        <label className="toolbar-label">Size Title</label>
        <Select
          value={{ value: currentFontSizeTitle, label: currentFontSizeTitle }}
          onChange={handleOnChangeFontSizeTitle}
          options={sizeOptionsTitle}
        />
      </div>
      <div className="toolbar-button">
        <IoMdResize />
        <label className="toolbar-label">Size Text</label>
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
