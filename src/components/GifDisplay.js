function GifDisplay(data){

    if(data.gif === null){
        return <h1>Please Search for Gif Above</h1>
    }
    console.log(data.gif)
    if(data.gif === "False"){
       
        return <h1>Didn't type a search</h1> 
        
    }
  
  return <div>
        {console.log(data.gif.data)}
      
        <img src={data.gif.data.images.fixed_height.url}></img>
        </div>  
    
    
}

export default GifDisplay