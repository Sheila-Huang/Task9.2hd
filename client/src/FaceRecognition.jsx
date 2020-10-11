import React,{Component} from 'react';
import './App.css';
//import Nav from "./Navigation";
import FaceDetection from "./FaceDetection";
//import Logo from "./logo/logo";
import Input from "./InputImageUrl";
import './setupProxy'
import Clarifai from 'clarifai';
import 'core-js/es/map';
import 'core-js/es/set';



// const paraparticles = {

// 	particles:{
// 		number:{
// 			value:50,
// 			density:
// 			{
// 				enable:true,
// 				value_area:800
// 			}
// 		}
// 	}
// }

const app = new Clarifai.App({
 apiKey: '574a95b4f3694c1b85ced16bcd4838b7'
});

class FaceRecognition extends React.Component{

	constructor()
	{
		super();
		this.state =
		{
			input:'',
			imageUrl:'',
			boxes:[],
		
		}
	}

	onFaceCalculate = (data) =>
	{



const image = document.getElementById('inputImage');
    const height = Number(image.height);
    const width = Number(image.width);

    const boxes = data.outputs[0].data.regions.map(box => {
      const box_info = box.region_info.bounding_box;
      return({
        top_row: box_info.top_row * height,
        bottom_row: height - box_info.bottom_row*height,
        right_col: width - box_info.right_col*width,
        left_col: box_info.left_col*width
      })
    })

    return boxes;
	};


	getImageData = (box) =>
	{
        this.setState({
            boxes: box
          })
        // this.setState({boxWidth:event.target.width, boxHeight:event.target.height});
	}

	onInputChange = (event) =>
	{
		this.setState({input:event.target.value});
		
	}

	onButtonClick = () =>
	{
		//this.setState({})
		this.setState({imageUrl:this.state.input});
		app.models.predict(
            //"a403429f2ddf4b49b307e318f00e528b", 
            {
                id: "a403429f2ddf4b49b307e318f00e528b",
                version: "34ce21a40cc24b6b96ffee54aabff139",
              },
            this.state.input)
		.then(response =>this.getImageData(this.onFaceCalculate(response)))
              .catch(err => console.log)
  
  }


	render(){
        const { boxes, imageUrl} = this.state;
  return (
    <div className="box">
       
         
         <Input  onInputChange = {this.onInputChange} onButtonClick = {this.onButtonClick}/>
         <FaceDetection boxes = {boxes} imageUrl = {imageUrl} />
    </div>
  );
}
}
export default FaceRecognition;
