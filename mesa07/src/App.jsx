import { useState } from "react";
import Lista from "./components/Lista"

function App() {
  const [itens, setItens] = useState([])

  function addItem() {
    setItens([...itens, itens.length +1])
  }

  return (
    <div>
      <h1>Itens</h1>
      <ul>
        {itens.map((item, index)=>(
          <Lista key={index} item={item}/>
        ))}
      </ul>
      <button onClick={addItem}>Clique</button>
    </div>
  )
}

export default App
