import { useState } from 'react';
import './App.css'

function App() {
  const [textOut, setTextOut] = useState("");
  const [textIn, setTextIn] = useState("");

  const URL = "http://127.0.0.1:8000/traducir";

  const data = {
    "texto": `${textIn}`,
    "idioma_destino": "en"
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  const hanleChange = (event) => {
    setTextIn(event.target.value);
  };

  const translate = () => {
    fetch(URL, options)
    .then(res => res.json())
    .then(res => {
      setTextOut(res.traduccion);
    })
  }

  return (
    <main>
      <div className='container'>
        <textarea onChange={hanleChange} name="input-translate" cols="50" rows="10" autoCapitalize='sentences' required placeholder='Escribe algo para traducir'></textarea>
        <button onClick={translate}>Traducir</button>
        <div>{textOut}</div>
      </div>
    </main>
  )
}

export default App
