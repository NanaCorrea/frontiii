// export default function Box(props) {

import { useContext } from "react"
import { AuthContext } from "../../context/auth-context"

//     // const [boxValue, setBoxValue] = useState(200)

//     return (
//     <div style={{background: "#999"}}>
//         <h2>Box - {props.value}</h2>
//         <button onClick={()=> props.setValue(props.value + 1)}>Incrementar</button>
//     </div>
//     )
// }

export default function Box() {

    const {email, userName, setEmail} = useContext(AuthContext)

    // const [boxValue, setBoxValue] = useState(200)

    return (
    <div style={{background: "#999"}}>
        <h2>Box</h2>
        <button onClick={()=> {}}>Incrementar</button>
        <input value={email} type="text" onChange={(event)=> setEmail(event.target.value)}/>
    </div>
    )
}