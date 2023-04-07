import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [toDos, setToDos] = useState([])

  const [title, setTitle] = useState("")

  const [date, setDate] = useState("")

  const [id, setId] = useState("")

  function cleanFields() {
    setTitle("")
    setDate("")
    setId("")
  }
 
  async function getToDos(){
    try {
      const response = await axios.get("https://api-todo-six.vercel.app/todo")
      setToDos(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos")
    }
  }

  async function addToDo(event){
    event.preventDefault()

    try {
      await axios.post("https://api-todo-six.vercel.app/todo", {
        title: title,
        date: date
      })
      cleanFields()
      getToDos() 
    } catch (error) {
      alert("Erro ao tentar cadastrar")
    }

  }

  async function deleteToDo(id) {
    try {
      await axios.delete(`https://api-todo-six.vercel.app/todo/${id}`)
      getToDos() 
    } catch (error) {
      alert("Erro ao tentar apagar")
    }
  }

  function fillForm(todo){
    setTitle(todo.title)
    setDate(todo.date.split("T")[0])
    setId(todo._id)
  }

  async function editTodo(event){
    event.preventDefault()
    try {
      await axios.put(`https://api-todo-six.vercel.app/todo/${id}`, {      
      title: title,
      date: date
    })
      cleanFields()
      alert("Editado com sucesso")
      getToDos();
    } catch (error) {
      alert("Erro ao editar")
    }
  }

  useEffect(()=>{
    getToDos();
  },[])

  return (
    <div>
      <h1>Hello World!</h1>

      <form onSubmit={id ? editTodo : addToDo}>
        <input placeholder="Digite o título" type="text" value={title} onChange={(event)=>setTitle(event.target.value)}/>
        <input placeholder="Informe a data" type="date" value={date} onChange={(event)=>setDate(event.target.value)}/>
        <br />
        <input type="submit" />
      </form>

      <ul>
        {toDos.map((todo)=> 
        <li key={todo._id} style={{border: "1px solid grey", marginBottom:5}}>
          <h3>{todo.title}</h3>
          <p>{todo.date}</p>
          <button onClick={() => deleteToDo(todo._id)}>Apagar</button>
          <button onClick={() => fillForm(todo)}>Editar</button>
        </li>
        )}
      </ul>
    </div>
  )
}

export default App

// import axios from "axios"
// import { useEffect, useState } from "react"

// function App() {

//   const [products, setProducts] = useState([])

//   async function getProducts(){
//     // const response = await fetch("https://dummyjson.com/products")
//     // const data = await response.json()

//     // console.log(data.products);

//     try {
//       const response = await axios.get("https://dummyjson.com/products")
//       setProducts(response.data.products);
//     } catch (error) {
//       alert("Erro ao buscar produtos")
//     }
//   }

//   useEffect(()=>{
//     getProducts();
//   },[])

//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <p>{JSON.stringify(products)}</p>
//     </div>
//   )
// }

// export default App
