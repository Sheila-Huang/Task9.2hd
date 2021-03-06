import React from 'react'
import { Component } from 'react';
import { storage } from './firebase';

class ImageUpload extends Component{

constructor(props){
    super(props);
    this.state={
        image:null,
        url:''

    }
    this.handleChange=this.handleChange.bind(this)
    this.handleUpload=this.handleUpload.bind(this)
}
handleChange=(e)=>{
if(e.target.files[0]){
    const image=e.target.files[0];
this.setState(()=>({image}));

}


}

handleUpload=()=>{
const {image}=this.state;
const uploadTask =storage.ref(`images/${image.name}`).put(image)
uploadTask.on('state_changed',

(error)=>{
    console.log(error)
},
()=>{

    storage.ref('images').child(image.name).getDownloadURL()
    .then(url=>{
        console.log(url);
        this.setState({url})
    })
})
};


render(){
    const style = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      };
    return (
       
<div  style={style} className="box">
<input 
type="file"
onChange={this.handleChange}
/>
<button
onClick={this.handleUpload}
>Upload</button>

<div className="box">
<img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
</div>
</div>

     )
}


}
export default ImageUpload