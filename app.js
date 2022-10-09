
const registro = document.getElementById("registro");
const datos = document.querySelectorAll("#registro input");

//En esta parte se crean las expresiones regulares 
//Funcionan para condicionar al usuario a usar 
//los carácteres correctos en cada entrada
const exp ={
   
   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.] + $/,
   nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
   password: /^.{4,12}$/,
}
//Vamos a validar los input para que se reconozcan los datos
//Ejemplo: Angela = nombre
//Cambio de color azul = correcto o rojo = incorrecto
const validarRegistro = (e) => {
    switch(e.target.name){
        case "correo":
            if(exp.registro.test(e.target.value)){
            }else{
                document.getElementById("usuarios__correo")
            }
        break;
        case "ID":
        break;
        case "nombre":
        break;
        case "password":
        break;
    }
}

//Damos funcionalidad a los input con función tipo flecha
datos.forEach((input) => {
    //Usamos keyup para que al soltar la tecla nos ejecute una función
    input.addEventListener("keyup", validarRegistro);
    input.addEventListener("blur", validarRegistro);
});

//Damos funcionalidad al registro mediante una función flecha
//Mediante php lo podemos enviar a otra página
//Aún sin habilitar dicha función
//Sólo está habilitado por ahora para llenar datos y que 
//al orpimir el botón se borre la info
registro.addEventListener("submit", (e) => {
    //Evitamos enviar los datos temporalmente para probar funcionalidad deñ registro
    e.preventDefault();
});

