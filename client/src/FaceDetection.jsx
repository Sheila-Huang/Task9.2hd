import React from 'react';
//import "./FaceRecognition.css";

const FaceDetection =({imageUrl,boxes})=>{
	
		return(
            <div 
            className="absolute ma2 face">
			
			 {(imageUrl !== '') && <img id='inputImage' alt={'Face Recognized'} src={imageUrl} width='500px'/>  } 
        {boxes.map((box, index) =>
          <div key={index} className='bounding-box' style={{top: box.top_row, right: box.right_col, bottom: box.bottom_row, left: box.left_col}}></div> 
        )}
            </div>
			)

	}

export default FaceDetection;