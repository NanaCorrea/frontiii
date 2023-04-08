import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header style={{background: "grey"}}>
            <ul style={{display:"flex", listStyle:"none", gap:50}}>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </header>
    )
}