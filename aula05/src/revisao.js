// const numeros = [1,2,3,4,5];

// const dobro = numeros.map((numero)=> numero * 2)

// console.log(dobro);

// console.log(numeros[0]); 

// numeros.push(6);

// console.log(numeros);

// const result = numeros.filter((item)=>{console.log(item);})

// const result = numeros.filter((item)=>{
//     if(item <3){
//         return item
//     }
// })

// const result = numeros.filter((item)=> item>3)

// const total = numeros.reduce((numero, soma)=>numero+sum)

// console.log(total);

const usuarios = [
    {
        nome: "Mariana",
        idade: 34
    },
    {
        nome: "Marcus",
        idade: 38
    },
    {
        nome: "Sandy",
        idade: 40
    }
]

// const result = usuarios.filter((usuario)=> usuario.idade >=40)

// console.log(result);

const soma = usuarios.reduce((soma, usuario)=> usuario.idade + soma, 0)

console.log(soma);

const total = usuarios.map((usuario)=>usuario.idade*usuario.idade)
console.log(total);