import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/header'
import Home from './pages/Home'
import Form from './pages/Form'
import NotFound from './pages/NotFound'

function App() {

  return (  
    <BrowserRouter>
    <Header />
     <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/form/:id" element={<Form />}/>
        <Route path="/form/" element={<Form />}/>
        <Route path="*" element={<NotFound />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
