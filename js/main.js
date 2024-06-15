const textcontrasena = document.querySelector("#text-contrasena");
const input = document.querySelector("#rango");
const cbuppercase = document.querySelector("#uppercase");
const cbminuscula = document.querySelector("#minuscula");
const cbnumeros = document.querySelector("#numeros");
const cbsimbolos = document.querySelector("#simbolos");

function validarCampos(){
    let str = '';
    const uppercase = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const minuscula = 'abcdefghijklmnñopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%&'


    if(
        cbuppercase.checked === false &&
        cbminuscula.checked === false &&
        cbnumeros.checked === false &&
        cbsimbolos.checked === false 


    ) {
        alert('Debes soleccionar algunas reglas para generar la contraseña')
        return
    }
    
    if(cbuppercase.checked){
        str += uppercase
    }

    if(cbuppercase.checked){
        str += minuscula
    }

    if(cbuppercase.checked){
        str += numeros
    }

    if(cbuppercase.checked){
        str += simbolos
    }

    generarContrasena(str)

}

function generarContrasena(str){

    let pass = '';

    for (let i = 0; i < input.value; i++) {
        const char = Math.floor(Math.random() * str.length + 1);
        
        pass += str.charAt(char)
    }

    textcontrasena.value = pass


}