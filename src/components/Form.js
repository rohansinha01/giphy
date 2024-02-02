import { useState } from "react"

function Form(props){
    // declare state to track form values
    const [randomGif] = useState([
        
    ])

    // write a handleChange to update the state
    // const handleChange = (event) => {
    //     // grab the input
    //     const input = event.target
    //     // get the text from the input
    //     const val = input.value
    //     // make a copy of the current state (new object)
    //     const newState = {...formData}
    //     //update the newState
    //     newState[input.name] = val
       
    //     // update the state
    //     setFormData(newState)
    // }

    // write a handle form submission
    const handleSubmit = (event) => {
        // prevent the refresh from form submission
        event.preventDefault()
        // search for movie using our prop

        //if certain event does not meet this, block from getting to endpoint - guard clause - control flow
        props.gifSearch(randomGif)
    } 
    return <div>
        <form onClick={handleSubmit}>
            {/* <input type="text" value={formData.searchterm} onChange={handleChange} name="searchterm"/>  add to different component*/} 
            <input type="submit" value="Random Gif"/>
           
        </form>
    </div>
}

export default Form