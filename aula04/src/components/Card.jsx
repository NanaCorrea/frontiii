// function Card(props) {
//     return(    <div style={{ width: 70, border:"1px solid black" }}>
//     <img width={40} src={props.img} alt={props.title}/>
//     <span>{props.title}</span>
//     </div>)
// ;
// }

// function Card({title, img}) {
//     return(    <div style={{ width: 70, border:"1px solid black" }}>
//     <img width={40} src={img} alt={title}/>
//     <span>{title}</span>
//     </div>)
// ;
// }

function Card(props) {
    const {title, img} = props;
    return(    <div style={{ width: 70, border:"1px solid black" }}>
    <img width={40} src={img} alt={title}/>
    <span>{title}</span>
    </div>)
;
}

export default Card;

// const usuario = {
//     nome: "Mariana",
//     cidade: "São José dos Campos"
// };

// const {nome, cidade} = usuario

// console.log(nome);