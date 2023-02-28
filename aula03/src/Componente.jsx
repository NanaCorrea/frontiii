import { useState } from 'react'

function Componente() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Eu sou um componente!</h1>
    </div>
  )
}

export default Componente
