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

function blank_light(){
    
    document.getElementById("orange-light").outerHTML = document.getElementById("orange-light").outerHTML.replace("orange-circle","blank-circle");
    document.getElementById("red-light").outerHTML = document.getElementById("red-light").outerHTML.replace("red-circle","blank-circle");
    document.getElementById("red-light").outerHTML = document.getElementById("red-light").outerHTML.replace("red-circle","blank-circle");
}


// setTimeout(red_light,3000);
// setTimeout(orange_light,6000);
// setTimeout(green_light,9000);

function off_light(){
    
    document.getElementById("orange-light").outerHTML = document.getElementById("orange-light").outerHTML.replace("orange-circle","blank-circle");
    document.getElementById("red-light").outerHTML = document.getElementById("red-light").outerHTML.replace("red-circle","blank-circle");
    document.getElementById("green-light").outerHTML = document.getElementById("green-light").outerHTML.replace("green-circle","blank-circle");
}

function re(){
    setTimeout(red_light,1000);
}

function or(){
    setTimeout(orange_light,2000);
}

function gr(){
    setTimeout(green_light,3000);
}

function of(){
    setTimeout(off_light,3000);
}


function onBtn(){
   setInterval(() => {
        re();
        or() ;
        gr() ;
    
    }, 4000);

}


function blink_switch(){
//     setTimeout(orange_light,1000);
// setTimeout(blank_light,2000);
// // setTimeout(orange_light,3000);
// for (var i = 1; i <= 5; i++){
    // setTimeout(orange_light,1000);
    // setTimeout(blank_light,2000);}
   setInterval(() => {
        or() ;
        of() ;
    
    }, 4000);


// var i;
//  {
//   console.log(i);
// }
}



