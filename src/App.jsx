import './App.css'



function App() {
  let textIn = ""

  const URL = "http://127.0.0.1:8000/traducir";

  const data = {
    "texto": `${textIn}`,
    "idioma_destino": "en"
  }

  const options = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  

  const hanleChange = (event) => {
    textIn = event.target.value;
    console.log(textIn)
  };

  const translate = () => {
    fetch(URL, options)
  }

  return (
    <main>
      <div className='container'>
        <textarea onChange={hanleChange} name="input-translate" cols="50" rows="10" autoCapitalize='sentences' required placeholder='Escribe algo para traducir'></textarea>
        <button onClick={translate}>Traducir</button>
        <div></div>
      </div>
    </main>
  )
}

export default App
