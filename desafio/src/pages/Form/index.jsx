import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../services/api"

export default function Form(){
    const navigate = useNavigate()
    const {id} = useParams()
    const [aluno, setAluno] = useState({})

    async function getAluno() {
        try {
            const { data } = await api.get(`/aluno/${id}`)
            setAluno({ ...data });
        } catch (error) {
            alert('Erro ao buscar aluno')
        }
    }

    async function editAluno(event) {
        event.preventDefault()
        await api.put(`/aluno/${id}`, aluno)
        navigate("/home")
    }

    async function createAluno(event) {
        event.preventDefault()
        await api.post(`/aluno`, aluno)
        navigate("/home")
    }

    useEffect(()=>{
        getAluno()
    }, [])

    return (
        <form onSubmit={id ? editAluno : createAluno}>
            <h1>{id}</h1>
            <input type="text" placeholder="Nome" value={aluno.nome} onChange={(event)=> setAluno({...aluno, nome: event.target.value})}/>
            <input type="text" placeholder="Matricula" value={aluno.matricula} onChange={(event)=> setAluno({...aluno, matricula: event.target.value})}/>
            <br />
            <br />
            {/* <select value={aluno.curso}>
                <option value="Banco de Dados">Banco de Dados</option>
                <option value="React JS">React JS</option>
                <option value="CSS">CSS</option>
            </select> */}
            <input type="text" placeholder="Curso" value={aluno.curso} onChange={(event)=> setAluno({...aluno, curso: event.target.value})}/>
            <input type="number" placeholder="Bimestre" value={aluno.bimestre} onChange={(event)=> setAluno({...aluno, bimestre: event.target.value})}/>
            <br />
            <br />
            <input type="submit" value={"Salvar"}/>
        </form>
    )
}