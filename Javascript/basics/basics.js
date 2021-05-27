list = [1,2,3,4,5];

for(i in list){
    document.write(list[i]);
}



function add(){
    var num1 = Number(document.getElementById("n1").value);
    var num2 = Number(document.getElementById("n2").value);
    var addi = num1+num2;
    document.getElementById("para").innerHTML = addi;
    

}