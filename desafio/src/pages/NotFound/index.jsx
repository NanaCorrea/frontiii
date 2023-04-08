import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Página não encontrada!</h1>
            <Link to="/home">Ir para a Tela Inicial</Link>
        </div>
    )
}