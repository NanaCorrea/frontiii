``
import { useState } from "react";

// {
//   nome:"",
//   idade:""
// }

function App() {
  const [userNameInput, setUserNameInput] = useState("");
  const [userAgeInput, setUserAgeInput] = useState("");

  const [listaDeUsuarios, setListaDeUsuarios] = useState([]);

  function addUserList() {
    // event.preventDefault();
    // console.log(event);
    const newUser = {
      idade: userAgeInput,
      name: userNameInput,
    };

    // listaDeUsuarios.push(newUser)

    setListaDeUsuarios([...listaDeUsuarios, newUser]);
    setUserNameInput("");
    setUserAgeInput("");
    // alert(userAgeInput);
  }

  console.log(listaDeUsuarios);

  return (
    <div>
      <h1>Hello World</h1>

      <h3>{userNameInput}</h3>
      <h3>{userAgeInput}</h3>

      <form>
        {/* <form onSubmit={addUserList}> */}
        <input
          value={userNameInput}
          onChange={(event) => setUserNameInput(event.target.value)}
        />

        <br />
        <br />

        <input
          value={userAgeInput}
          onChange={(event) => setUserAgeInput(event.target.value)}
        />
        <br />
        <br />

        {/* <input type="submit" /> */}
        <input type="button" onClick={addUserList} value="Add" />
      </form>

      {/* <p>{JSON.stringify(listaDeUsuarios)}</p> */}

      <ul>
        {listaDeUsuarios.map((item, index) => (
          <li key={index}>
            {item.name} - {item.idade}
          </li>
        ))}
      </ul>

      {/* <button onClick={addUserList}>Add</button> */}
    </div>
  );
}

export default App;
// import { useState } from "react"


// ["",""]

// [
//   {
//     name:"",
//     idade:""
//   },
//   {
//     name:"",
//     idade:""
//   }
// ]
// function App() {
//   const [listaNomes, setListaNomes] = useState([])

//   const [inputText, setInputText] = useState("")
//   const [inputIdade, steInputIdade] = useState("")

//   function addName(){
//     const novoItem = {
//       name: inputText,
//       idade: inputIdade
//     }
//     setListaNomes([...listaNomes, novoItem])
//     setInputText("")
//     steInputIdade("")
//   }
//   return (
//     <div>
//       <h1>Hello World!</h1>
//       {/* <h2>{inputText}</h2> */}
//       <ul>
//         {listaNomes.map((item, indice)=>(
//           <li key={indice}>{item.name} - {item.idade}</li>
//         ))}
//       </ul>
//       <input placeholder="Nome" value={inputText} onChange={(event)=>setInputText(event.target.value)} />
//       <input placeholder="Idade" value={inputIdade} onChange={(event)=> steInputIdade(event.target.value)} />
//       <button onClick={addName}>Clicar</button>
//     </div>
//   )
// }

// function App() {

//   const [count, setCount] = useState([]);

//   function incrementValue(){
//     setCount([...count, count.length])
//   }

//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <h2>{count}</h2>
//       {/* <button onClick={()=> setCount(count+1)}></button> */}
//       <button onClick={incrementValue}>Incrementar</button>
//     </div>
//   )
// }

// function App() {

//   const [count, setCount] = useState([]);

//   function incrementValue(){

//     const copyCount = [...count];
//     copyCount.push(count.length)

//     setCount(copyCount)
//   }

//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <h2>{count}</h2>
//       {/* <button onClick={()=> setCount(count+1)}></button> */}
//       <button onClick={incrementValue}>Incrementar</button>
//     </div>
//   )
// }

// function App() {

//   const [count, setCount] = useState(0);

//   function incrementValue(){
//     setCount(count+1)
//   }

//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <h2>{count}</h2>
//       {/* <button onClick={()=> setCount(count+1)}></button> */}
//       <button onClick={incrementValue}>Incrementar</button>
//     </div>
//   )
// }

// export default App
