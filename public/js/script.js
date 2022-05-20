function validate(){

    var pass = document.getElementById('contrasena1').value
    var pass2 = document.getElementById('contrasena2').value
    
   if(!email.match(emailRegex)) {
        alert("Por forvor ingrese un email valido.");
        return false;
    }
    else if(email == "") {
        alert("Por favor inserte su email.");
        return false;
    }

    else if(pass.length==0){
        alert("Por favor inserte su contraseña.");
        return false;
    }
    else if(pass!=pass2){
        alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        return false;
    }
}