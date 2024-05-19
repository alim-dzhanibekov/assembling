import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const calculate = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const clear = () => {
        setInput('');
        setResult('');
    };

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly />
            <div className="buttons">
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={calculate}>=</button>
                <button onClick={clear}>C</button>
            </div>
            <div>Result: {result}</div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));