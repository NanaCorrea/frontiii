export default function Card(props){

    const {dado}= props;
    const {titulo, subtitulo, url} = dado;
    return(
        <div>
            <h4>{titulo}</h4>
            <p>{subtitulo}</p>
            <img src={url} alt="" />
        </div>
    )
    
}