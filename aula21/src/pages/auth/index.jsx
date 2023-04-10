import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import logo from "../../assets/logo.png"
import styles from "./style.module.css"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"


export default function AuthPage() {

    const {saveName, saveToken} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    async function logar(){
        try {
            const response = await api.post("/auth", {email, password})
            saveName(response.data.name)
            saveToken(response.data.token)
            navigate("/home")
        } catch (error) {
            alert("Erro ao logar")
        }
        
    }

    return (
        <div className={styles.container}>
            <img src={logo} alt="logo"/>
            <div className={styles.form}>
                <input type="email"  value={email} onChange={(event)=> setEmail(event.target.value)}/>
                <input type="password" value={password} onChange={(event)=> setPassword(event.target.value)}/>
                <button onClick={logar}>Entrar</button>
            </div>
        </div>
    )
}