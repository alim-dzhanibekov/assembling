import React, { useState } from 'react';
import CalculatorImpl from './CalculatorImpl';
import './styles.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const calculator = new CalculatorImpl();

  const handleNum1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(event.target.value);
  };

  const handleAdd = () => {
    const result = calculator.add(Number(num1), Number(num2));
    setResult(result.toString());
  };

  const handleSubtract = () => {
    const result = calculator.subtract(Number(num1), Number(num2));
    setResult(result.toString());
  };

  const handleMultiply = () => {
    const result = calculator.multiply(Number(num1), Number(num2));
    setResult(result.toString());
  };

  const handleDivide = () => {
    const result = calculator.divide(Number(num1), Number(num2));
    setResult(result.toString());
  };

  return (
    <div>
      <h1>Калькулятор</h1>
      <input type="tel" pattern="[0-9]*" value={num1} onChange={handleNum1Change} placeholder="Введите число 1" />
      <input type="tel" pattern="[0-9]*" value={num2} onChange={handleNum2Change} placeholder="Введите число 2" />
      <button onClick={handleAdd}>Сложить</button>
      <button onClick={handleSubtract}>Вычесть</button>
      <button onClick={handleMultiply}>Умножить</button>
      <button onClick={handleDivide}>Разделить</button>
      <p>Результат: {result}</p>
    </div>
  );
};

export default Calculator;
