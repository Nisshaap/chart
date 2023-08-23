import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');
  const [display1Text, set1DisplayText] = useState<string>('');

  const handleButtonClick = () => {
    setDisplayText('Hello from parent!');
  };

  const updateTextFromChild = (newText: string) => {
    set1DisplayText(newText);
  };
  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={handleButtonClick}>Show Text in Child</button>
      <p>Text from Child: {display1Text}</p>
      <ChildComponent text={displayText} updateText={updateTextFromChild}/>
    </div>
  );
};

export default ParentComponent;
