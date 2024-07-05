import { createContext, useContext, useState } from "react";


const CalculatorContext = createContext();


export const CalculatorProvider = ({children}) =>{
    const [listaNumeros, setListaNumeros] = useState([]);
    const [numero, setNumero] = useState(0); //""

    function addNumber (num){
        setNumero(numero + num)
        if(listaNumeros.length > 0){
            setListaNumeros(listaNumeros + ", " + num)
        } else {
            setListaNumeros(listaNumeros + num)
        }
        
    }

    /*
    function addToList (num){
        setListaNumeros(listaNumeros + num)
    }
        */

    /*
    function suma (numA, numB){
        return numA + numB
    }
    */

    function reset(){
        setListaNumeros([])
        setNumero(0)
    }


    return (
        <CalculatorContext.Provider value={{listaNumeros, numero, addNumber, reset}}>
            {children}
        </CalculatorContext.Provider>
    );
};

export const useCalculator = () => useContext(CalculatorContext);
