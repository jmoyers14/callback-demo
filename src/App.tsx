import React, { SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Child } from './Child';

function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const handleAClick = (event: SyntheticEvent) => {
        setA(a + 1);
    };

    const handleBClick = (event: SyntheticEvent) => {
        setB(b + 1);
    };

    return (
        <div className="App">
            <h1>Parent</h1>
            <button onClick={handleAClick}>a++</button>
            <button onClick={handleBClick}>a++</button>
            <Child a={a} b={b} />
        </div>
    );
}

export default App;
