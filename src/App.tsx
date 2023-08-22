import React from 'react';
import { Pie } from '@ant-design/charts';

interface DataItem {
  name: string;
  value: number;
  color?: string; // Add an optional color property
}

// Function to generate dynamic colors
const generateColor = (name: string): string => {
  const hash = name.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  const hue = (hash * 137) % 360;
  return `hsl(${hue}, 70%, 50%)`;
};

// Sample data
const data1: DataItem[] = [
  { name: 'A', value: 10, color: generateColor('A') },
  { name: 'B', value: 25, color: generateColor('B') },
  { name: 'C', value: 30, color: generateColor('C') },
];

const data2: DataItem[] = [
  { name: 'A', value: 5, color: generateColor('A') },
  { name: 'B', value: 12, color: generateColor('B') },
  { name: 'C', value: 18, color: generateColor('C') },
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
