
(function () {
  let Registro = document.getElementsByName('name') ;
  
  Registro.addEventListener("submit" , validar);

  elementos= Registro.elements
  boton= document.getElementById('btn')

  
  let validar = function (e) {
    validarNombre(e);
  }


})()


let validarNombre = function (e) { if (Registro.nombre.name === 0){
  alert("no es")
} 
e.preventDefault();

}





