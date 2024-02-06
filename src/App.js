import logo from './logo.svg';
import './App.css';
import GifDisplay from './components/GifDisplay';
import Form from './components/Form'
import { useState } from 'react';
// import Searchform from './components/Searchform';
// import Searchgif from './components/Searchgif';
import Header from './components/Header.js';

function App() {

  //apikey
  const apiKey = "nHFOnU0Kj9bG5vIYhOgaWErZm8ZXCMmN"

  // state - creating this variable and telling it to use setGif to update the state. 
  const [gif, setGif] = useState(null)
  // const [search, setSearch] = useState(null)

  //function to get a gif from the api
  const getGif = async () => {
    // create the url
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    // fetch the gif data
    const response = await fetch(url)
    // get the JSON from the response
    const data = await response.json()
    // update teh state with the gif
    setGif(data)
  
  
  
    
  }
  
// const getSearch = async (searchterm) => {
//     const searchedTerm = `https://api.giphy.com/v1/gifs/search?q=${searchterm}&api_key=${apiKey}`
//     const searchedResponse = await fetch(searchedTerm)
//     const searchedData = await searchedResponse.json()
//     setSearch(searchedData)
//   }


  return (
    <div className="App">
      <Header />
      <Form setrandomGif={getGif}/>
      <GifDisplay gif={gif}/>
      
      {/* <Searchform searchGif={getSearch}/>
      <Searchgif search={search}/> */}
    </div>
  );
}

export default App;
