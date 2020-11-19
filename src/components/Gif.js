import { useState } from 'react';
function Gif() {
  // const insertImage = (imageSource) => {
  //   const img = '<img class="gif" src="' + imageSource + '" alt="">'
  //   $('.gif-holder').empty()
  //   $('.gif-holder').append(img)
  // }
  //
  // const getGiphy = () => {
  //   const keyword = $('#gifKeyword').val()
  //   if (keyword == '') {
  //     $('.gif-holder').empty()
  //     $('.gif-holder').append('<div>Please input a keyword!</div>')
  //   } else {
  //     const giphyFetchUrl = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1"
  //     fetch(giphyFetchUrl)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(jsonResponse => {
  //       console.log(jsonResponse)
  //       const gifUrl = jsonResponse.data[0].images.original.url
  //       insertImage(gifUrl)
  //     });
  //   }
  // }

  const [url, setUrl] = useState('');

  return (
    <div className="gif">
      <img src={url} />
    </div>
  );
}

export default Gif;
