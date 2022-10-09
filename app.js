
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

//Damos funcionalidad al registro mediante una función flecha
//Mediante php lo podemos enviar a otra página
//Aún sin habilitar dicha función
//Sólo está habilitado por ahora para llenar datos y que 
//al orpimir el botón se borre la info
registro.addEventListener("submit", (e) => {
    //Evitamos enviar los datos temporalmente para probar funcionalidad deñ registro
    e.preventDefault();

});

