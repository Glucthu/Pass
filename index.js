function RandomPassGen(){
    let length = document.getElementById("length").value;
    let pass = "";
    let min = 33, max = 127;

    if(length >= 4 && length <= 64){
        for(let i = 0; i < length; i++){
            let newChar = String.fromCharCode((Math.floor((Math.random() * (max - min))+ min)));
            
            if (newChar == "<") newChar = "&lt;";
            if (newChar == ">") newChar = "&gt;";

            pass += newChar;
        }
        
        document.getElementById("pass").innerHTML = pass;

        if(length >= 16) document.getElementById("pass").style.overflowX = "scroll"
        else document.getElementById("pass").style.overflowX = "hidden"

        document.getElementById("pass").style.border = "1px solid #222";

        document.getElementById("copy").style.visibility = "visible";
        removeNotifications();
    } else
    {
        removeNotifications();
        addElement("div", "pass lenght must be 4 >= length >= 64", "main", ["notification", "error"]);
    }
}

function removeNotifications(){
    if(document.getElementsByClassName("notification").length > 0){
        let notifications = document.getElementsByClassName("notification")
        for(let i = 0; i < notifications.length; i++){
            notifications[i].remove()
        }
    }
}

function CopyPass(){
    navigator.clipboard.writeText(document.getElementById("pass").innerHTML);
    removeNotifications();
    addElement("div", "password copied", "main", ["notification", "correct"]);
}

function addElement (tag, content, fatherElement, classList) {
    // Create element:
    const newElement = document.createElement(tag);
    newElement.innerHTML = content;
    classList.map(newClass => newElement.classList.add(newClass))

    // Append to another element:
    document.getElementById(fatherElement).appendChild(newElement);
  }