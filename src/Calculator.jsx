import { useState } from 'react';
import * as math from 'mathjs';
const Calculator = () => {
  const [sum, setSum] = useState('');

  const handleButtonClick = (value) => {
    setSum((prevSum) => prevSum + value);
  };

  const handleClearButtonClick = () => {
    setSum('');
  };

  const handleEqualButtonClick = () => {
    try {
      const result = math.evaluate(sum);
      setSum(result.toString());
    } catch (error) {
      setSum('Error');
    }
  };

  const buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    '0', '.', '/'
  ];

  return (
    <div className="calculator">
      <div className="display">{sum || '0'}</div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
        <button onClick={handleClearButtonClick}>C</button>
      </div>
      <button onClick={handleEqualButtonClick} className="equal-button">=</button>
    </div>
  );
};

export default Calculator;

