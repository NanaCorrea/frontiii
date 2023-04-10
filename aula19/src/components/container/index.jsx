import { useContext } from "react"
import { MyContext } from "../../context/my-context"
import { AuthContext } from "../../context/auth-context"

export default function Container() {

    const data = useContext(MyContext)
    const {email, nome} = useContext(AuthContext)

    return (
    <div style={{background: "#598fff"}}>
        <input type="text" value={data.nome} onChange={(event)=>data.setNome(event.target.value)}/>
        <h2>Container {data.nome}</h2>
        <h2>Disciplina {data.disciplina}</h2>
        <p>E-mail: {email} UserName: {nome}</p>
    </div>
    )
}