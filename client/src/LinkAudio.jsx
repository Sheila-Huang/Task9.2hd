import React,{useState,useEffect} from 'react'
import io from "socket.io-client"
import audioFile from './listen1.mp3'


const socket=io.connect("http://localhost:8000")

const audio=new Audio();

function LinkAudio(){

const [part,setPart]=useState('')
const [playing,setPlaying]=useState('')

useEffect(()=>{

function receiveMessage(m){
    if(part==='worker'){

    audio.src=m.path
        audio.play();
    }
    setPlaying(m.name)
}

function stopAudio(){
setPlaying("")

}

socket.on('play',receiveMessage)
socket.on('stop',stopAudio)


return ()=>{
    socket.off('play',receiveMessage)
    socket.off('stop',stopAudio)
}
},[part])

useEffect(()=>{

function handleStop(){
    socket.emit('stop')
}
audio.addEventListener('pause',handleStop);

return ()=>{
    audio.removeEventListener('pause',handleStop);

}

},[])

const handlePlay=()=>{

socket.emit('play',{name:'Request audio 1',path:audioFile})

}
return(
<div className="container p-3 my-3 bg-dark text-white">
    
    <h1>Audio part</h1>
    <div></div>
    <div className="box">
    <button onClick={()=>setPart("worker")}>Worker</button>
    <button onClick={()=>setPart("requester")}>Requester</button>
    </div>
<div className="box"><h4>Choose for an clip</h4>
<button onClick={handlePlay}>Play!</button>
<div>Playing {playing}</div>
</div>

</div>
)
}
export default LinkAudio