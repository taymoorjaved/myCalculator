import React, {useState} from 'react';
import './calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState(0);
  const [num1, setNum1] = useState(null);
  const [operator, setOperator] = useState(null);

  const GetValue = (e) => {
    let currentValue = e.currentTarget.innerText;
    if (display) currentValue = display.concat(currentValue);
    setDisplay(currentValue);
  };

  const getOperator = (e) => {
    let opr = e.currentTarget.innerText;
    if (!operator) {
      setNum1(display);
      setDisplay(0);
    }
    if (operator) {
      if (operator.includes('+')) {
        let result = parseFloat(display) + parseFloat(num1);
        setNum1(result);
        setDisplay(0);
      }
      if (operator.includes('-')) {
        let result = parseFloat(num1) - parseFloat(display);
        setNum1(result);
        setDisplay(0);
      }
    }
    setOperator(opr);
  };
  const Calculate = () => {
    if (operator.includes('+')) {
      let result = parseFloat(display) + parseFloat(num1);
      setDisplay(JSON.stringify(result));
    }
    if (operator.includes('-')) {
      let result = parseFloat(num1) - parseFloat(display);
      setDisplay(JSON.stringify(result));
    }
  };

  const Reset = () => {
    setDisplay(0);
    setNum1(null);
    setOperator(null);
  };
  const onchange = (e) => {};

  return (
    <>
      <div className='calContainer'>
        <div className='oprDisplay'>{num1}</div>
        <input
          className='calDisplay'
          type='text'
          value={display}
          onChange={onchange}
        />
        <div className='btnContainer'>
          <div className='firstRow'>
            <button onClick={GetValue}>7</button>
            <button onClick={GetValue}>8</button>
            <button onClick={GetValue}>9</button>
            <button className='orgBtn' onClick={getOperator}>
              +
            </button>
          </div>
          <div className='secondRow'>
            <button onClick={GetValue}>4</button>
            <button onClick={(e) => GetValue(e)}>5</button>
            <button onClick={(e) => GetValue(e)}>6</button>
            <button className='orgBtn' onClick={getOperator}>
              -
            </button>
          </div>
          <div className='thirdRow'>
            <button onClick={(e) => GetValue(e)}>1</button>
            <button onClick={(e) => GetValue(e)}>2</button>
            <button onClick={(e) => GetValue(e)}>3</button>
            <button className='equalBtn orgBtn' onClick={() => Calculate()}>
              =
            </button>
          </div>
          <div className='fourthRow'>
            <button onClick={() => Reset()}>AC</button>
            <button onClick={(e) => GetValue(e)}>0</button>
            <button onClick={(e) => GetValue(e)}>.</button>
          </div>
        </div>
      </div>
    </>
  );
};

export {Calculator};
