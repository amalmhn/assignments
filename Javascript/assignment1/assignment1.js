function validateForm(){
var a = document.forms["myForm"]["name"].value;
var b = document.forms["myForm"]["mail"].value;
var c = document.forms["myForm"]["age"].value;
var d = document.forms["myForm"]["mobile"].value;

if (a<0 || a>0 || a==0) {
    alert("Name must be filled out");
    return false;
  }

  if (c>110 || c<0) {
    alert("Enter an age between 0 and 110");
    return false;
  }

  var x = /^\d{10}$/;
  if (x.test(d))   
        {  
         
        }   
        else   
        {  
            alert("Your Mobile Number Is Not Valid.")  
        }  
}