import React from 'react';
//import "./Input.css";

const InputImageUrl=({onInputChange,onButtonClick})=>{
	
		const style = {
            //height: '100vh',
            display: 'center',
            flexDirection: 'column',
            alignItems: 'center',
			justifyContent: 'center',
			margin:'100px',
			padding:'100px'
          };
		return(
			
				 <div 
				 >
				<input onChange = {onInputChange} 
				
				style={{height:'60px',width:'700px'}}
				type="text" placeholder="          Enter the picture URL here!"/>
				<button onClick =  {onButtonClick} 
			
				> Detect</button>
			</div>
 			//</Tilt>

			


			)
	}



export default InputImageUrl;