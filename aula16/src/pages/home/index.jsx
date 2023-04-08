import {Link, useNavigate} from 'react-router-dom'
import styles from './style.module.css'

export default function HomePage(){

    const navigate = useNavigate()

    return(
        <div className={styles.app}>
            <h1>Home page</h1>
            {/* <Link to="/dashboard">Ir para o dashboard</Link> */}
            <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
        </div>
    )
}