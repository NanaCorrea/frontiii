import { useState } from "react"
import Box from "./components/box"
import Container from "./components/container"
import MyProvider from "./context/my-context"
import AuthProvider from "./context/auth-context"
import Form from "./components/form"

function App() {

  const [value, setValue] = useState(100)

  return (
    <MyProvider>
      <AuthProvider>
        <main>
          <h1>Oi</h1>
          {/* <Box value={value} setValue={setValue}/>
          <Container value={value}/> */}
          <Box />
          <Container />
          <Form />
        </main>
      </AuthProvider>
    </MyProvider>

  )
}

export default App
