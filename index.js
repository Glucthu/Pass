function RandomPassGen(){
    let length = document.getElementById("length").value;
    let pass = "";
    let min = 33, max = 127;

    for(let i = 0; i < length; i++){
        pass += String.fromCharCode((Math.floor((Math.random() * (max - min))+ min)));
    }
    
    document.getElementById("pass").innerHTML = pass;
}