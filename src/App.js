import './App.css';
import Gif from './components/Gif.js'
import { useState } from 'react';

function App() {
  const getGiphy = (keyword) => {
    const giphyFetchUrl = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1"
    fetch(giphyFetchUrl)
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      console.log(jsonResponse)
      const url = jsonResponse.data[0].images.original.url
      console.log(url)
      setGifUrl(url)
    });
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const setGif = () => {
    setGifUrl(inputValue)
  }

  const handleClick = () => {
    getGiphy(inputValue)
  }

  const [inputValue, setInputValue] = useState('');
  const [gifUrl, setGifUrl] = useState('')

  return (
    <div className="App">
      <h1 className="base">👋 Thanks for taking our programming test!</h1>
      <input type="text" id="gifKeyword" name="" onChange={handleChange} />
      <button type="button" name="button" onClick={handleClick}>Fetch me a Gif!</button>

      <Gif url={gifUrl}/>
    </div>
  );
}

export default App;
