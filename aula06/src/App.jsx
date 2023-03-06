import Card from "./components/Card";

const usuarios = [
  {
    id: 1,
    name: "Mariana",
    turma: "4C",
    ativo: true
  },
  {
    id: 2,
    name: "Ariana",
    turma: "4B", 
    ativo: false
  },
  {
    id: 3,
    name: "Érika",
    turma: "4A",
    ativo: true
  },
]

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      {
        usuarios.map((usuario)=>(
          <Card key={usuario.id} usuario={usuario}/>
        ))
      }
      {/* <Card title="titulo1"/>
      <Card title="titulo2"/>
      <Card title="titulo3"/>
      <Card title="titulo4"/>
      <Card title="titulo5"/>
      <Card /> */}
    </div>
  )
}

export default App;