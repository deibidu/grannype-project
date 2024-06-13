import PatternBlue from '../../assets/images/background-images/pattern-blue-image-bg.jpeg';
import PatternGreen from '../../assets/images/background-images/pattern-green-image-bg.jpeg';
import PatternYellow from '../../assets/images/background-images/pattern-yellow-image-bg.jpeg';
import PatternRed from '../../assets/images/background-images/pattern-red-image-bg.png';
import FruitBlueberry from '../../assets/images/background-images/blueberry-image-bg.jpeg';
import FruitOrange from '../../assets/images/background-images/oranges-image-bg.jpeg';
import FruitLemons from '../../assets/images/background-images/lemons-image-bg.jpeg';
import FoodIceCream from '../../assets/images/background-images/ice-creams-image-bg.jpeg';
import Beach from '../../assets/images/background-images/beach-image-bg.jpeg';
import Squares from '../../assets/images/background-images/squares-warm-image-bg.jpeg';
import Sticks from '../../assets/images/background-images/sticks-image-bg.jpeg';
import Dots from '../../assets/images/background-images/colors-dots-image-bg.jpeg';
import Abstract from '../../assets/images/background-images/abstract-circles-image-bg.jpeg';
import Ribbons from '../../assets/images/background-images/ribbons-image-bg.jpeg';
import Flowers from '../../assets/images/background-images/flowers-image-bg.jpeg';
import Notebook from '../../assets/images/background-images/notebook-image-bg.jpeg';
import Paper from '../../assets/images/background-images/paper-image-bg.jpeg';

export function backgroundImageOptions() {
  const backgroundImagesArray = [
    { value: Paper, label: 'Paper' },
    { value: Notebook, label: 'Notebook' },
    { value: PatternBlue, label: 'Blue Pattern' },
    { value: PatternGreen, label: 'Green Pattern' },
    { value: PatternYellow, label: 'Yellow Pattern' },
    { value: PatternRed, label: 'Red Pattern' },
    { value: FruitBlueberry, label: 'Blueberry Fruit' },
    { value: FruitOrange, label: 'Orange Fruit' },
    { value: FruitLemons, label: 'Lemons Fruit' },
    { value: FoodIceCream, label: 'Ice Cream' },
    { value: Beach, label: 'Beach' },
    { value: Squares, label: 'Squares' },
    { value: Sticks, label: 'Sticks' },
    { value: Dots, label: 'Dots' },
    { value: Abstract, label: 'Abstract' },
    { value: Ribbons, label: 'Ribbons' },
    { value: Flowers, label: 'Flowers' },
  ];
  return backgroundImagesArray;
}

export function BackgroundImageSelect({
  options,
  selectedOption,
  onChange,
}: {
  options: { value: string; label: string }[];
  selectedOption: { value: string; label: string };
  onChange: (option: { value: string; label: string }) => void;
}) {
  return (
    <select
      value={selectedOption.value}
      onChange={e => {
        const selectedOption = options.find(option => option.value === e.target.value);
        if (selectedOption) {
          onChange(selectedOption);
        }
      }}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
