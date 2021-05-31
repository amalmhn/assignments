var request = new XMLHttpRequest();
var request1 = new XMLHttpRequest();
var url = "http://battuta.medunes.net/api/country/all/?key=b54c942e0959e98dd9240ad02e7330c1"

request.open("get",url,true)
request.send()
console.log("Hi")
request.onreadystatechange=()=>{
    if(request.readyState==4){
        if((request.status>199)&(request.status<300)){
            
        var data = JSON.parse(request.responseText);
        console.log(data)
        var data1 = data.map(obj=>{
            var sel = document.createElement("option");
            sel.textContent = obj.name;
            sel.value = obj.code;
            document.querySelector('#select1').appendChild(sel);
        })    
        }else{
            console.log("Error")
        }
        }
    }


function region(){
    var regVal = document.getElementById("select1").value;
    console.log(regVal);
    // document.getElementById("select").value = ""
    url1 = `http://battuta.medunes.net/api/region/${regVal}/all/?key=b54c942e0959e98dd9240ad02e7330c1`
    console.log(url1)
    request1.open("get",url1,true);
    request1.send();
    request1.onreadystatechange=()=>{
        if(request1.readyState==4){
            if((request1.status>199)&(request1.status<300)){
                var datas = JSON.parse(request1.responseText);
                var datas1 = datas.map(obj=>{
                    var sel1 = document.createElement("option");
                    sel1.textContent = obj.region;
                    sel1.value = obj.region;
                    document.querySelector('#select2').appendChild(sel1);
                })
            }else{
                console.log("Error");
            }
        }
    }
}
region();


