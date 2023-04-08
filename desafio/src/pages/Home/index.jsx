import { Link } from "react-router-dom";
import api from "../services/api"
import { useEffect, useState } from "react"

export default function Home(){
        const [alunos, setAlunos] = useState([])

        async function getAlunos(){
            try {
                const {data} = await api.get("aluno") 
                setAlunos(data);
            } catch (error) {
                alert("Erro ao buscar alunos.")
            }
    
    
        }
    
        useEffect(()=> {
            getAlunos()
        }, [])

        async function deleteAluno(id) {
            await api.delete(`/aluno/${id}`)
            getAlunos()
        }
    
        return(
            <div>
                <h1>Alunos</h1>
                <Link to="/form">Formulário</Link>
                <ul>
                    {
                        alunos.map((aluno)=> <li key={(aluno.matricula)}><Link to={`/form/${aluno._id}`}><p>{aluno.nome}</p></Link><button onClick={()=> deleteAluno(aluno._id)}>Apagar</button></li>)
                    }
                </ul>
            </div>
        )
}