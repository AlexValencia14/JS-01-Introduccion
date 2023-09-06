// Este es un comentario

/*
Este
es
un
comentario
multilinea
*/

// alert ("Hola mundo");// Sirve para crear alertas

var frasco="pastillas";
var frasco="pasitas con chocolate";
var frasco="shampo";

console.log(frasco);//Para ver esto se necesita inspeccionar el HTML e ir a consola
/* Tipo de datos (primitivos y no primitivos)

string
number
boolean
undefined
null
symbol
object (no es primitivo)


*/

// string es una cadena de texto que, simpre debe ir entre comillas simples o comillas dobles
var vaso="leche";

// number no lleva comillas, y se refiere a numero con el cúal podemos hacer operaciones
var edad=24;

// boolean solamente tiene dos salidas que es true or false
var cuentasPremium=false;

// undefined es un tipo de dato que existe pero no esta definido o inicializado (no sabemos que tipo de variable vamos a poner)
var proximaCita;

// null es un valor que no tenemos pero que declaramos (Sabemos que tipo de datos vamos a poner pero no hay)
var asistenciaInvitado=null;



// String
var nombrePaciente="Alejandro";
var nombreDoctor="Dr. Cesar Salazar";

// Number
var edadPaciente="24";
var capacidadPacientesPorDoctor=15;

// Boolean
var mayorEdad=true;
var doctorDisponible= false;

//undefined
var telefonoOpcional;
var citaUrgencia;

//null
var apellidoPaciente=null;
var correoElectronico= null;

var edadPacienteNumero= parseInt(edadPaciente);
console.log(edadPacienteNumero);
console.log(typeof(edadPacienteNumero));



var edad="31";
var peso=66;

console.log(typeof(edad));

// typeof es una palabra reservada para saber el tipo de dato

//var es una variable de alcance global
//let es una variable con alcance local (solo se utiliza dentro de un bloque de codigo)

//const es una constante, es decir, que es una variable que no cambia

var pesoTexto=peso.toString();
console.log(peso);
console.log(typeof(pesoTexto));

var edadNumero= parseInt(edad);
console.log(edadNumero);
console.log(typeof(edadNumero));

