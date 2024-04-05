import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
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
    if(event.target.value === ""){
      setTextOut("");
    }
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
      <motion.div layout className='container'>
        <textarea onChange={hanleChange} name="input-translate" autoCapitalize='sentences' required placeholder='Escribe algo para traducir'></textarea>
        <button onClick={translate}>TRADUCIR</button>
        <AnimatePresence>
        {textOut && <motion.div initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 40}}>{textOut}</motion.div>}
        </AnimatePresence>
      </motion.div>
    </main>
  )
}

export default App
