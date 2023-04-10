import styles from "./style.module.css"
import {useContext, useEffect} from "react"
import logo from "../assets/logo.png"
import { AuthContext } from "../context/authContext"
import { useNavigate } from "react-router-dom"

export default function Layout({children}) {

    const navigate = useNavigate()
    const {name, removeUser}= useContext(AuthContext)

    useEffect(()=>{
        const token = localStorage.getItem("@times_token")
        if(!token){
            navigate("/")
        }
    },[])

    function logout(){
        removeUser()
        navigate("/")
    }

    return(
        <div>
            <header>
                <img className={styles.logo} src={logo} alt="logo" />
                <ul>
                    <li>Olá, {name}</li>
                    <li><button onClick={logout} style={{cursor:"pointer", background:"transparent", border: "none", color:"#fff", fontFamily:"Poppins", fontSize:"16px"}}>Sair</button></li>
                </ul>
            </header>
            <div className={styles.children}>{children}</div>
            <footer className={styles.footer}>Footer</footer>
        </div>
    )
}