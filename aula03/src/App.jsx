import { useState } from 'react'
import "./styles.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1 className='nome'>Hello World!</h1>
    </div>
  )
}

export default App
