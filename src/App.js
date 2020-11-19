import './App.css';
import Gif from './components/Gif.js'
import { useState } from 'react';

function App() {
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    setKeyword(inputValue)
  }

  const [inputValue, setInputValue] = useState('');
  const [keyword, setKeyword] = useState('')

  return (
    <div className="App">
      <h1 className="base">👋 Thanks for taking our programming test!</h1>
      <input type="text" id="gifKeyword" name="" onChange={handleChange} />
      <button type="button" name="button" onClick={handleClick}>Fetch me a Gif!</button>

      <Gif keyword={keyword}/>
    </div>
  );
}

export default App;
