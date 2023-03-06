import styles from "./styles.module.css"

function Card(props) {
    const {usuario}=props;
    // const {title = "Usuario não passou"} = props;
    return (
        <li className={usuario.ativo ? styles.rowGreen : styles.rowRed}>
        <h3>{usuario.name}</h3>
        <h3>{usuario.turma}</h3>
      </li>
        // <div className={styles.container}>
        //     <h4>{title}</h4>
        // </div>
    )
};

export default Card;