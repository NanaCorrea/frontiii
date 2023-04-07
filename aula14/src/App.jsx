import { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(false)

  async function getProducts(){
    setLoading(true)
    try {
      const response = await fetch('https://dummyjson.com/products')
      // const {products} = await response.json() desestruturo para não precisar fazer data.products
      const data = await response.json()
      setProducts(data.products);
    } catch (error) {
      alert("Erro ao buscar dados.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div>
      <h1>Produtos</h1>
      {loading === true ? "Carregando..." : null}
      {loading === false && products.length < 1 ? "Nenhum produto encontrado." : null}
      <ul>
        {
          products.map((product)=>
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.thumbnail} width={300} />
          </li>)
        }
      </ul>
      {/* <p>{JSON.stringify(products)}</p> */}
    </div>
  )
}

export default App
