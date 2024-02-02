function GifDisplay(data){
    

    if(data.gif === null){
        return <h1>Please Search for Gif Above</h1>
    }

    if(data.gif.Reponse === "False"){
        return <h1>Didn't type a search</h1>
    }
  
  return <div>
        {console.log(data.gif.data)}
        <h1>{data.gif.data[0].title}</h1>
        <img src={data.gif.data[0].images.fixed_height.url}></img>
        </div>  
    
    
}

export default GifDisplay