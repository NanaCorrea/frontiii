function Lista(props) {
    const {lista} = props
    return (
        <li key={lista.index}>O item {lista.item} foi adicionado a lista.</li>
    )
}

export default Lista;