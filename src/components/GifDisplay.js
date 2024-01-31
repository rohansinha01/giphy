function GifDisplay(data){
    if(data === null){
        return <h1>Please Search for Gif Above</h1>
    }

    if(data.Reponse === "False"){
        return <h1>Didn't type a search</h1>
    }
  
  return <div>
        {console.log(data.gif.data[0].title)}
        <h1>{data.gif.data[0].title}</h1>
        </div>  
    
    
}

export default GifDisplay