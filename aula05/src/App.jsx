import Card from "./components/Card"

const dados = [
  {
    id: 1,
    titulo: "Titulo 1",
    subtitulo: "Subtitulo 1",
    url: "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(95)/savellic/catalog/fotostil/capri/7150fpreto-1000x1000.jpg"
  },
  {
    id: 2,
    titulo: "Titulo 2",
    subtitulo: "Subtitulo 2",
    url: "https://www.adolfoturrion.com.br/image/cache/data/sapatos/2018/derbies/derby-almeria-preto/new/sapato-masculino-derby-almeria-preto-7-550x550.jpg"
  },
  {
    id: 3,
    titulo: "Titulo 3",
    subtitulo: "Subtitulo 3",
    url: "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(95)/savellic/catalog/fotostil/casual-pre/5649mcafe-1000x1000.jpg"
  }
]

function App() {


  return (
    <div>
      <h1>Hello App!</h1>
      {
        dados.map((dado)=><Card key={dado.id} 
        // title={titulo.titulo} subtitulo={titulo.subtitulo} url={titulo.url}
        dado={dado}
        />)
      }
      {/* <Card title="Card 1"/>
      <Card title="Card 2"/>
      <Card title="Card 3"/> */}
    </div>
  )
}

export default App
