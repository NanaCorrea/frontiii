import { useState } from 'react'

// [
//   {
//     id: 1,
//     disciplina: "HTML",
//     duracao: 80
//   },
//   {
//     id: 2,
//     disciplina: "CSS",
//     duracao: 40
//   }
// ]

function App() {
  const [id, setId] = useState("")
  const [disciplina, setDisciplina] = useState("")
  const [duracao, setDuracao] = useState("")
  const [listaDisciplinas, setListaDisciplinas] = useState([])

  function addItem(event) {
    event.preventDefault()
    if(disciplina == "" || duracao == ""){
      alert("Preencha todas as informações");
      return
    }

    // if(id){
    //   const copiaListaDisciplinas = [...listaDisciplinas]
    //   const index = copiaListaDisciplinas.findIndex((item)=> item.id === id)
    //   copiaListaDisciplinas[index].disciplina = disciplina
    //   copiaListaDisciplinas[index].duracao = duracao   
    // }else{
    setListaDisciplinas([...listaDisciplinas, {
      id: Date.now(),
      disciplina:disciplina,
      duracao:duracao
    }])
    

    setDisciplina("")
    setDuracao("")
    setId("")
  }

  function editItem(event){
    event.preventDefault()

    const copyListaDisciplinas = [...listaDisciplinas]

    const index = copyListaDisciplinas.findIndex((disciplina)=> disciplina.id === id)

    copyListaDisciplinas[index].disciplina = disciplina
    copyListaDisciplinas[index].duracao = duracao

    setListaDisciplinas(copyListaDisciplinas)

    setDisciplina("")
    setDuracao("")
    setId("")
  }

  function apagarItem(id) {
    if (confirm("Clique em OK para confirmar a exclusão")) {
      const result = listaDisciplinas.filter((item)=> item.id !== id)
      setListaDisciplinas(result)
    }
  }

  function preencherEstados(item){
    setDisciplina(item.disciplina)
    setDuracao(item.duracao)
    setId(item.id)
  }

  return (
    <div className='App'>
      <h1>Cadastro de Disciplina</h1>
      {/* <h2>Disciplia: {disciplina} </h2>
      <h2>Carga horária: {duracao}</h2> */}
      <form onSubmit={id ? editItem : addItem}>
        <input value={disciplina} onChange={(event) => setDisciplina(event.target.value)} placeholder='Nome da disciplina' />
        <br />
        <br />
        <select value={duracao} onChange={(event) => setDuracao(event.target.value)}>
          <option value="" disabled>Selecione uma opção</option>
          <option value="40">40 horas</option>
          <option value="60">60 horas</option>
          <option value="80">80 horas</option>
        </select>
        <br />
        <br />
        <input type="submit" value={id ? "Salvar" : "Cadastrar"}/>
      </form>

      {listaDisciplinas.length > 0 ? (
      <ul>
        {listaDisciplinas.map((item)=>{
          const {id, disciplina, duracao} = item
          return(
            <li key={id} style={{border: "1px solid black"}}><p>Nome da Disciplina: {disciplina}</p><p>Carga horária: {duracao}</p><button onClick={()=> apagarItem(item.id)} >Apagar</button><button onClick={()=> preencherEstados(item)} >Editar</button></li>
          )
          })}
      </ul>) : (
        <p>Nenhuma discilina cadastrada!</p>
      )}

    </div>
  )
}

export default App
