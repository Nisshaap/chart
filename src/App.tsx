import React from 'react';
import { Pie } from '@ant-design/charts';

interface DataItem {
  name: string;
  value: number;
  color?: string; // Add an optional color property
}

// Function to generate dynamic RGB colors
const predefinedColors: Record<string, string> = {
  Alpha: 'green',
  Beta: 'blue',
  Gamma: 'red',
};

const generateColor = (name: string): string => {
  if (predefinedColors[name]) {
    return predefinedColors[name] || 'gray'; 
  }

  const hash = name.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  const red = (hash * 13) % 256;
  const green = (hash * 17) % 256;
  const blue = (hash * 19) % 256;
  return `rgb(${red}, ${green}, ${blue})`;
};

// Sample data
const data1: DataItem[] = [
  { name: 'Alpha', value: 10, color: generateColor('Alpha')}, // Using predefined color
  { name: 'Beta', value: 25, color: generateColor('Beta')  }, // Using predefined color
  { name: 'Gamma', value: 30, color: generateColor('Gamma') }, // Using predefined color
  { name: 'Delta', value: 70, color: generateColor('Delta') }, // Using generated color
];

const data2: DataItem[] = [
  { name: 'Alpha', value: 5, color: generateColor('Alpha') }, // Using predefined color
  { name: 'Beta', value: 12, color: generateColor('Beta') }, // Using predefined color
  { name: 'Gamma', value: 18, color: generateColor('Gamma') }, // Using predefined color
  { name: 'Delta', value: 19, color: generateColor('Delta') }, // Using generated color
];

const App: React.FC = () => {
  const chartConfig = {
    data: data1,
    angleField: 'value',
    colorField: 'name',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name}\n{percentage}',
      style: {
        fill: '#333',
        fontSize: 14,
      },
    },
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h2>Chart 1</h2>
        <Pie {...chartConfig} />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Chart 2</h2>
        <Pie {...chartConfig} data={data2} />
      </div>
    </div>
  );
};

export default App;
