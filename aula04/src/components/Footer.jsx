function Footer(props){
    return (
    <footer>
        {/* <center>{props.title ? props.title : "Vazio"}</center> */}
        <center>{props.title || "Vazio"}</center>
    </footer>
    )
}

export default Footer;