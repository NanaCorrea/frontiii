import { useState } from "react";

function App(){
  const [numeros, setNumeros] = useState([10,20,30,40,50])

function addNumber() {
  setNumeros([...numeros, 60])
  // const copiaNumeros = [...numeros]
  // copiaNumeros.push(60)
  // setNumeros(copiaNumeros)
}

  return(
    <div>
      <h1>Números</h1>
      <ul>
        {numeros.map((numero, index)=>(
          <li key={index}>{numero}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Clique</button>
    </div>
  )
}

export default App;
// import { useState } from "react";

// function App(){
//   const [numero, setNumero] = useState(0)
//   const [nome, setNome]= useState("")

//   function handleClick(){
//     setNumero(numero+1)
//     setNome("Wesley" + numero)
//   }


//   return(
//     <div>
//       <h1>{numero}</h1>
//       <h2>{nome}</h2>
//       <button onClick={handleClick}>Clique</button>
//     </div>
//   )
// }

// export default App;