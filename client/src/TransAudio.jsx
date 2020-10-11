import React,{useState,useEffect} from 'react'




const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  const mic = new SpeechRecognition()
  
  mic.continuous = true
  mic.interimResults = true
  mic.lang = 'en-US'

function TransAudio(){

  
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('Continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Speech recognition service has started')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
   

  }
  
const handleSaveData=()=>{

  fetch('http://localhost:8080/request',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      noteLine:savedNotes,

    })
})
.then(response=>response.json())
.then(data=>console.log(data))
.catch(err=>{
    
console.log("Error:"+err)

})

}

  return (
    <>
     
      <div className="container p-3 my-3 bg-dark text-white">
      <h1>Converting audio to text</h1>
      <div></div>
        <div className="box">
         
          <h2>Current Note</h2>
          {isListening ? <span>Listening:🎙️</span> : <span>🛑🎙️</span>}
          <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <button onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>
          <p>{note}</p>
        </div>
        <div className="box">
          <h2>Notes</h2>
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
            <button onClick={handleSaveData}>
           Save to Database
          </button>
        </div>
      </div>
    </>
  )



}
export default TransAudio