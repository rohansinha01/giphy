import logo from './logo.svg';
import './App.css';
import GifDisplay from './components/GifDisplay';
import Form from './components/Form'
import { useState } from 'react';

function App() {

  //apikey
  const apiKey = "nHFOnU0Kj9bG5vIYhOgaWErZm8ZXCMmN"

  // state - creating this variable and telling it to use setGif to update the state. 
  const [gif, setGif] = useState(null)

  //function to get a gif from the api
  const getGif = async (searchterm) => {
    // create the url
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    // fetch the gif data
    const response = await fetch(url)
    // get the JSON from the response
    const data = await response.json()
    // update teh state with the gif
    setGif(data)
    
  }



  return (
    <div className="App">
      <Form gifSearch={getGif}/>
      <GifDisplay gif={gif}/>
    </div>
  );
}

export default App;
