import Alert from '@mui/material/Alert';
// import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ImPacman } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [loading, setLoading]= useState(false)

  async function getProducts(){
    setLoading(true)
    try {
      const response = await axios.get("https://dummyjson.com/producs")
      console.log(response.data);
    } catch (error) {
        toast.error("error")
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getProducts()
  },[])

  return (
    <>
      <ToastContainer/>
      <h1>Oi</h1>
      {loading ? <CircularProgress /> : null}
      <ImPacman style={{color: "purple", fontSize:"50px"}}/>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="danger">Danger</Button>{' '}
    </>
  )
}

export default App