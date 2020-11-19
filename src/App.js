import logo from './logo.svg';
import './App.css';

function App() {
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

  return (
    <div className="App">
      <h1 className="base">👋 Thanks for taking our programming test!</h1>
      <input type="text" id="gifKeyword" name="" />
      <button type="button" name="button" onClick="getGiphy()">Fetch me a Gif!</button>

      <div className="gif-holder">
      </div>
    </div>
  );
}

export default App;
