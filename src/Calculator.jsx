import React from 'react'
import { CalculatorProvider, useCalculator } from './CalculatorProvider';
import {Link} from 'react-router-dom';

const Calculator = () =>{
    const {numero, addNumber} = useCalculator();
    const botones = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const addNumberFunction = (numero) => {
        addNumber(numero)
        //console.log(numero)
    };

    return (
        <>
            <h1>Calculadora</h1>
            <p>La calculadora sumará los números que se vayan seleccionando e irá enseñando el total de la suma. La página Resultado mostrará todos los números utilizados.</p>
            <p>Total: {numero}</p>
            {botones.map((numero, i) => (
                <button key={i} onClick={()=> addNumberFunction(numero)}>{numero}</button>
            ))}
            <Link to="/result">Resultado</Link>
        </>
    )

}


export default Calculator