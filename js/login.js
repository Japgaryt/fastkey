function checkLogin(){
    let username = document.getElementById("user").value;
    let password= document.getElementById("pass").value;
    if( username == ""){
        alert("Ingrese su usuario y/o correo electronico");
        return;
    }
    if(password == ""){
        alert("Para continuar es necesario ingresar su contrasena");
        return;
    }

    if(username == "admin" && password == "12345"){
        window.location = "./pages/inicio.html";
        return;
    }
    else{
        if(username == "comprador" && password == "comprador"){
            window.location = "OrdenCompra.html";
            return;
        }
        if(username == "cliente" && password == "cliente"){
            window.location = "../index.html";
            return;
        }
        else{
            alert("Credenciales incorrectas por favort verificalas");
            return;
        }
    }
}