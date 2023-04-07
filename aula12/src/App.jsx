import { useState, useEffect } from "react"


function App() {

  // const [number, setNumber] = useState(0)
  // const [number2, setNumber2] = useState(9000)
  // const [isValid, setIsValid] = useState(false)

  // let nome = "Wesley";

  // useEffect(
  //   ()=>{
  //     setNumber(100)
  //   }, [] //vai executar uma vez e se qualquer mudança acontecer no number2 ele executa de novo
  // )

  // useEffect(
  //   ()=>{
  //     console.log("Executei");
  //   }, [number2] //vai executar apenas uma vez
  // )

  
  // useEffect(
  //   ()=>{
  //     console.log("AAA");
  //     if (isValid) {
  //       console.log("Executei");
  //     }
  //   }, [number2, number, nome, isValid] //vai executar apenas uma vez
  // )

  // setNumber(100) trava, pois o react fica renderizando e redesenhando a tela várias vezes

  function getTemp() {
    return 30
  }

  const [temp, setTemp] = useState(0)

  useEffect(() => {
    const response = getTemp()
    setTemp(response)
  }, [])

  

  return (
    <div>
      <h1>Hello World!</h1>
      <h3>Temperatura de agora: {temp}</h3>
      {/* <h2>{number}</h2>
      <h2>{number2}</h2>

      <button onClick={()=>setNumber(number + 1)}>Incrementar1</button>
      <button onClick={()=>setNumber2(number2 + 1)}>Incrementar2</button> */}
    </div>
  )
}

export default App
