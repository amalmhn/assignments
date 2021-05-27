function red_light(){
    document.getElementById("green-light").outerHTML = document.getElementById("green-light").outerHTML.replace("green-circle","blank-circle");
    document.getElementById("orange-light").outerHTML = document.getElementById("orange-light").outerHTML.replace("orange-circle","blank-circle");
    document.getElementById("red-light").outerHTML = document.getElementById("red-light").outerHTML.replace("blank-circle","red-circle");

}

function orange_light(){
    document.getElementById("green-light").outerHTML = document.getElementById("green-light").outerHTML.replace("green-circle","blank-circle");
    document.getElementById("red-light").outerHTML = document.getElementById("red-light").outerHTML.replace("red-circle","blank-circle");
    document.getElementById("orange-light").outerHTML = document.getElementById("orange-light").outerHTML.replace("blank-circle","orange-circle");
    

}

function green_light(){
    
    document.getElementById("orange-light").outerHTML = document.getElementById("orange-light").outerHTML.replace("orange-circle","blank-circle");
    document.getElementById("red-light").outerHTML = document.getElementById("red-light").outerHTML.replace("red-circle","blank-circle");
    document.getElementById("green-light").outerHTML = document.getElementById("green-light").outerHTML.replace("blank-circle","green-circle");
}


// setTimeout(red_light,3000);
// setTimeout(orange_light,6000);
// setTimeout(green_light,9000);

function onBtn(){
    setTimeout(red_light,1000);
setTimeout(orange_light,6000);
setTimeout(green_light,9000);
}

function off_light(){
    
    document.getElementById("orange-light").outerHTML = document.getElementById("orange-light").outerHTML.replace("orange-circle","blank-circle");
    document.getElementById("red-light").outerHTML = document.getElementById("red-light").outerHTML.replace("red-circle","blank-circle");
    document.getElementById("green-light").outerHTML = document.getElementById("green-light").outerHTML.replace("green-circle","blank-circle");
}



