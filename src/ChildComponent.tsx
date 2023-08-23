import React from 'react';

interface ChildProps {
updateText: (newText: string) => void;
  text: string;
}



const ChildComponent: React.FC<ChildProps> = ({ text, updateText }) => {
    const handleButtonClick = () => {
        const newText = 'Hello from child!';
        updateText(newText); // Call the callback in parent
      };
  return (
    <div>
      <h3>Child Component</h3>
      <p>{text}</p>
      <button onClick={handleButtonClick}>Update Parent Text</button>
    </div>
  );
};

export default ChildComponent;
