import React from "react";
import {Link} from 'react-router-dom';
import { CalculatorProvider, useCalculator } from './CalculatorProvider';

function Result(){
    const {numero, listaNumeros, reset} = useCalculator();

    return(
        <>
            <h1>Resultado</h1>
            <p>Total: {numero}</p>
            <p>Lista de números usados: {listaNumeros}</p>
            <button onClick={reset}>Reset</button>
            <p><Link to="/">Calculadora</Link></p>
        </>
    )
}

export default Result