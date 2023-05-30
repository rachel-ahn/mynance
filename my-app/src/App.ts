// import logo from './logo.svg';
// import './App.css';

import { useState } from 'react';
import ReactDOM from 'react-dom/client';
// test
function InputSpending() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Spent:
        <input 
          type="number" 
          name="amount" 
          value={inputs.amount || ""} 
          onChange={handleChange}
        />
        </label>
      <label>On:
      <input 
        type="text" 
        name="category" 
        value={inputs.category || ""} 
        onChange={handleChange}
      />
      </label>
      
        <input type="submit" />
    </form>
  )
}

export default InputSpending;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InputSpending/>);