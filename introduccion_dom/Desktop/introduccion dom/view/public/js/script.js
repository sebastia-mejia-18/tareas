/* Selectores 
getElement
    getElementById -> Selecciona elemento por un id
    getElementsByClassName -> Selecciona elementos por clase
    getElementsByTagName -> Selecciona elemento por nombre de etiqueta
    
querySelector
    querySelector -> Permite seleccionar por id, por clase y por etiqueta
    querySelectorAll -> Permite seleccionar por id, por clase y por etiqueta
*/

// console.log(document.getElementById("usuario")) /* Solo muestra un elemento */
// console.log(document.getElementsByClassName("form")) /* Siempre muestra un arreglo */
// console.log(document.getElementsByTagName("form")) /* Siempre muestra un arreglo */

// console.log(document.querySelector("form"))
// console.log(document.querySelectorAll("form"))

import{usuarios} from'../../../model/ModelUsuarios.js'

console.log(usuarios)


 function IniciarSecion() {
     let usuario = document.querySelector('#Usuario').value
     let contraseña = document.querySelector('#Contraseña').value
    if(usuario == 'admin' && contraseña == '12345'){
console.log('bienvenido')
    }else{
        console.log('erro de credenciales')
    }
 }

// let IniciarSecion = function() { /* funcion de exprecion */
//     let usuario = document.querySelector('#usuario')
//     let contraseña = document.querySelector('#contraseña')
//     console.log(usuario)
//     console.log(contraseña)
//     console.log('iniciar sesion')
// }
// IniciarSecion()


// console.log(usuario)
