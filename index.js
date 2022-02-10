function RandomPassGen(){
    let length = document.getElementById("length").value;
    let pass = "";
    let min = 33, max = 127;

    if(length >= 1 && length <= 64){
        for(let i = 0; i < length; i++){
            let newChar = String.fromCharCode((Math.floor((Math.random() * (max - min))+ min)));
            
            if (newChar == "<") newChar = "&lt;";
            if (newChar == ">") newChar = "&gt;";

            pass += newChar;
        }
        
        document.getElementById("pass").innerHTML = pass;

        document.getElementById("pass").style.overflowX = "scroll";
        document.getElementById("pass").style.border = "1px solid #222";

        document.getElementById("copy").style.visibility = "visible";
    }
}

function CopyPass(){
    navigator.clipboard.writeText(document.getElementById("pass").innerHTML);
}