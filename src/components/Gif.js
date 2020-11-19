import { useState, useEffect } from 'react';

function Gif(props) {

  useEffect(() => {
    const {keyword} = props;
    if (keyword !== '') { getGiphy(keyword) }
  })

  const getGiphy = (keyword) => {
    const giphyFetchUrl = "https://api.giphy.com/v1/gifs/search?q="
      + keyword
      + "&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1"
    fetch(giphyFetchUrl)
    .then(response => { return response.json(); })
    .then(jsonResponse => {
      // console.log(jsonResponse)
      const url = jsonResponse.data[0] ? jsonResponse.data[0].images.original.url : '';
      // console.log(url)
      setGifUrl(url)
      setErrorText(url ? '' : "Sorry, I couldn't find a gif for that.")
    });
  }

  const [gifUrl, setGifUrl] = useState('')
  const [errorText, setErrorText] = useState('')

  return (
    <div className="gif">
      <img src={gifUrl} />
      <div className="error-text">{errorText}</div>
    </div>
  );
}

export default Gif;
