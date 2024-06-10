import React from 'react';
import WebFont from 'webfontloader';

export const LoadFonts = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: [
          'Cabin:ital,wght@0,400..700;1,400..700',
          'Caprasimo',
          'Chicle',
          'Cookie',
          'Gupter:wght@400;500;700',
          'Jost:ital,wght@0,100..900;1,100..900',
          'Limelight',
          'Lobster',
          'Noto+Serif:ital,wght@0,100..900;1,100..900',
          'Oswald:wght@200..700',
          'Parisienne',
          'Pattaya',
          'Quicksand:wght@300..700',
          'Rammetto+One',
          'Righteous',
          'Saira+Condensed:wght@100;200;300;400;500;600;700;800;900',
          'Satisfy',
          'Yesteryear',
        ],
      },
    });
  }, []);

  return null;
};

export default LoadFonts;

export const fontOptionsTitle = [
  { value: 'yesteryear, sans-serif', label: 'Yesteryear' },
  { value: 'cookie, sans-serif', label: 'Cookie' },
  { value: 'yellowtail, sans-serif', label: 'Yellowtail' },
  { value: 'chicle, sans-serif', label: 'Chicle' },
  { value: 'righteous, serif', label: 'Righteous' },
  { value: 'pattaya, sans-serif', label: 'Pattaya' },
  { value: 'jost, sans-serif', label: 'Jost' },
  { value: 'parisienne, serif', label: 'Parisienne' },
  { value: 'satisfy, cursive', label: 'Satisfy' },
  { value: 'limelight, cursive', label: 'Limelight' },
  { value: 'lobster, sans-serif', label: 'Lobster' },
  { value: 'caprasimo, serif', label: 'Caprasimo' },
  { value: 'saira condensed, serif', label: 'Saira Condensed' },
];

export const fontOptionsText = [
  { value: 'jost, sans-serif', label: 'Jost' },
  { value: 'oswald, sans-serif', label: 'Oswald' },
  { value: 'quicksand, sans-serif', label: 'Quicksand' },
  { value: 'noto-serif, serif', label: 'Noto Serif' },
  { value: 'gupter, serif', label: 'Gupter' },
  { value: 'cabin, sans-serif', label: 'Cabin' },
];
