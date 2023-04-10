import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthPage from "./pages/auth"
import AuthProvider from "./context/authContext"
import HomePage from "./pages/home"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />}/>
          <Route path="/home" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
