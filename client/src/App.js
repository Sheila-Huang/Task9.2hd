
import React from 'react'
import './App.css'
import TransAudio from './TransAudio'
import PhotoGenerator from'./PhotoGenerator'
import LinkAudio from './LinkAudio'
import FaceRecognition from './FaceRecognition'
import ImageUpload from './ImageUpload'


function App() {

return(
  <div>
  <PhotoGenerator />
  <br></br>
  <br></br>
<LinkAudio />
  <TransAudio />
  <ImageUpload/>
  <FaceRecognition />


  </div>
)


  
}

export default App
