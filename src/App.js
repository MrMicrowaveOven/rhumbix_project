import './App.css';
import Gif from './components/Gif.js'
import Autofill from './components/Autofill.js'
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [keyword, setKeyword] = useState('')

  return (
    <div className="App">
      <h1 className="base">👋 Thanks for taking our programming test!</h1>
      <input onChange={e => setInputValue(e.target.value)} value={inputValue}/>
      <Autofill value={inputValue} setValue={(selectedValue) => setInputValue(selectedValue)}/>
      <button onClick={() => setKeyword(inputValue)}>Fetch me a Gif!</button>
      <Gif keyword={keyword}/>
    </div>
  );
}

export default App;
