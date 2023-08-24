import React from 'react';
import { Pie } from '@ant-design/charts';

interface DataItem {
  name: string;
  value: number;
  color?: string; // Add an optional color property
}

// Function to generate dynamic RGB colors
const predefinedColors: Record<string, string> = {
  Alpha: 'rgba(0, 255, 0, 1)',  // Green with full opacity
  Beta: 'rgba(0, 0, 255, 1)',   // Blue with full opacity
  Gamma: 'rgba(255, 0, 0, 1)',  // Red with full opacity
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
  { name: 'Alpha', value: 10, color: predefinedColors['Alpha'] },
  { name: 'Beta', value: 25, color: predefinedColors['Beta'] },
  { name: 'Gamma', value: 30, color: predefinedColors['Gamma'] },
  { name: 'Delta', value: 70, color: generateColor('Delta') }, // Using generated color
];

const data2: DataItem[] = [
  { name: 'Alpha', value: 5, color: predefinedColors['Alpha'] },
  { name: 'Beta', value: 12, color: predefinedColors['Beta'] },
  { name: 'Gamma', value: 18, color: predefinedColors['Gamma'] },
  { name: 'Delta', value: 19, color: generateColor('Delta') }, // Using generated color
];

const App: React.FC = () => {
  const chartConfig = {
    data: data1,
    angleField: 'value',
    colorField: 'color',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name}\n{percentage}',
      style: {
        fill: '#333',
        fontSize: 14,
      },
      colorField: 'color', // Use colorField to specify the data field containing colors
    color: (colorField: string) => {
      return colorField; // This function is used to determine the color based on the colorField value
    },
    },
  };

  

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h2>Chart 1</h2>
        <Pie {...chartConfig} colorField="name"  color={data1.map(item => item.color || generateColor(item.name))}/>
      </div>
      <div style={{ flex: 1 }}>
        <h2>Chart 2</h2>
        <Pie {...chartConfig} data={data2} colorField="name" color={data2.map(item => item.color || generateColor(item.name))} />
      </div>
    </div>
  );
};

export default App;
