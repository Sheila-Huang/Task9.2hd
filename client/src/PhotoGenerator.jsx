import React,{useState} from 'react'
import axios from 'axios'
//import './main.css'
const style={

    width:"300px",
    height:"300px",
    textAlign:"center",
    
    };



function PhotoGenerator(){

const [image,setImage]=useState('')
const handleChange=()=>{

    axios.get('https://api.generated.photos/api/v1/faces?api_key=bCzA2-dk11OwvrfLiEmgfQ&emotion=joy')
    .then(res=>{
        //console.log(res.data.faces[0].urls[4][512])
        const uri=res.data.faces[0].urls[4][512]
        uri && setImage(uri)
    }).catch(err=>{
        console.log(err.message)
    })

}

return(
//<div className="container">
<div className="container p-3 my-3 bg-dark text-white">

<div 
className="box"
 style={{height:'600px',background:''}}>
<h3>AI Worker:</h3>
{image &&<img style={style}src={image} alt="AI one" />}
<br></br>
<br></br>
<br></br>
<br></br>
<br></br><br></br><br></br><br></br>

<div 
//className="card-body"
><button type="button" className="btn btn-primary" onClick={handleChange}>
Pick!</button></div>
</div>
</div>

)

}
export default PhotoGenerator