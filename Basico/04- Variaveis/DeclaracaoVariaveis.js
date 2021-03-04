/*
  Variaveis são formas de alocar os tipos de dados para operações.
  No javascript os tipos das variaveis são definidos dinamicamente.
*/

var meuNome = "John William";//meuNome foi associado a uma string

console.log(meuNome);//Mostra o valor da variavel no console

//Podemos usar o typeof(variavel) para poder saber o tipo da variavel
console.log(typeof(meuNome));

meuNome=45;//A variavel mudou o seu tipo dinamicamente
console.log(meuNome);
console.log(typeof(meuNome));
//---------------------------

//Formas de declarar uma variavel

var variavel;

// Var define uma variavel

let variavelLocal;
//let define uma variavel que só existirá dentro de um bloco

const constante=1.4112;
//define uma variavel que não terá seu valor alterado. Ela deve ser sempre inicializada !

//Pdemos declarar diversas variasi em uma única linha

var primeiroNome, nomeDoMeio, ultimoNome;