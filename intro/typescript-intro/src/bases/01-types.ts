 export let name = "Leonel";

 export const age: number = 35;
 export const isValid: boolean = true;

 name= "melissa"

 export const templateString = ` Esto es un string 
 multilinea
 que puede tener
 "dobles
 ' simples
 inyectar valores ${name}
 expresiones ${1 + 1}
 numeros: ${ age }
 booleanos: ${ isValid }
 `

 console.log(templateString)