import './App.css';
import Calculator from './Calculator';
import {CalculatorProvider} from './CalculatorProvider'
import Result from "./Result"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <CalculatorProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Calculator />}></Route>
          <Route path='/result' element={<Result />}></Route>
          
        </Routes>
      </Router>
    </CalculatorProvider>
  );
}

export default App;
