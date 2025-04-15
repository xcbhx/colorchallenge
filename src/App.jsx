import './App.css';
import { useState, useEffect } from 'react';


function getRandomHex() {
  const num = Math.floor(Math.random() * 256);
  const hex = num.toString(16).padStart(2, '0');
  return hex;
};

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
};

function App() {
  const [colors, setColors] = useState(['#ccc', '#ccc', '#ccc']);
  const [targetColor, setTargetColor] = useState('');
  const [result, setResult] = useState('');

  const generateColors = () => {
    const newColors = [getRandomColor(), getRandomColor(), getRandomColor()];
    setColors(newColors);
    setTargetColor(newColors[Math.floor(Math.random() * newColors.length)]);
    setResult('');
  };

  useEffect(() => {
    generateColors();
  }, []);

  const handleClick = (color) => {
    if (color === targetColor) {
      setResult('Correct!');
    } else {
      setResult('Incorrect!')
    }
  };

  return (
    <div className='App'>
      <h3>Click this color: <span style={{ fontWeight: 'bold' }}>{targetColor}</span></h3>

      <div className='divSquares'>
        {colors.map((color, index) => (
          <div 
          key={index}
          className='square'
          onClick={() => handleClick(color)}
          style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>

      <p className='message'>{result}</p>
      <button onClick={generateColors}>Play Again</button>
    </div>
  )
}

export default App;
