//Elements
var LocationHolder = document.createElement("div");
var imgHolder = document.createElement("img");
//Styles
LocationHolder.style.backgroundColor = "whitesmoke";    
imgHolder.style.width = "50pt";
LocationHolder.style.width = "60pt";
LocationHolder.style.borderRadius = "7px";
LocationHolder.style.position = "absolute";
LocationHolder.style.right = "0%";
LocationHolder.style.top = "80%"
//ChildApp
document.body.appendChild(LocationHolder);
LocationHolder.appendChild(imgHolder);

//Functions
function run() {
    if(navigator.onLine == true) {
        imgHolder.src = "Location_Found.png";
    }
    else if(navigator.onLine == false) {
        imgHolder.src = "Location_NotFound.png";
    }
}

setInterval(run,100)