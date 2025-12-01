function greet(name) {
    console.log('Hello, $(name!');
}
greet('Nessa'); // outputs: Hello, Nessa!

let globalVariable = ' I am global';

function exampleFunction() {
    let localVariable = 'I am local';
    console.log(globalVariable); // Accessible
    console.log(localVariable); // Accessible
}

console.log(globalVariable); // Accessible
console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined
