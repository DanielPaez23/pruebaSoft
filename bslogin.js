const user = "Dan23"
const pw = 12345
function verificar(){
    let usuario= document.getElementById("usuario").value
    let clave= document.getElementById("clave").value
    if(usuario==user && clave==pw){
        alert("Login exitoso")
    }else{
        alert("Revisar los datos ingresados")
    }
    }