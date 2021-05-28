function fetchData(){
    fetch("http://groupkt.com/country/get/all/").then(response =>{
    // console.log(response.json());
    if(!response.ok){
        throw Error;
    }
    return response.json();
    // console.log(val); 
    }).then(data =>{
        console.log(data.RestResponse.result);
        const html = data.RestResponse.result.map(all =>{
            return `
            <div id="details">
            <p>Name : ${all.name}</p>
            <p>Alpha1 : ${all.alpha2_code}</p>
            <p>Alpha2 : ${all.alpha3_code}</p>
            </div>`
        }).join('');
        console.log(html)
        document.querySelector('#app').insertAdjacentHTML('afterbegin',html); 
    }).catch(error =>{
        console.log(error);
    });
}

// fetchData();

//http://groupkt.com/country/get/all

{/* <div id="details">
<table>
<tr>
<td>Name</td>
<td>${all.name}</td>
</tr>
<tr>
<td>Alpha Code1</td>
<td>${all.alpha2_code}</td>
</tr>
<tr>
<td>Alpha Code2</td>
<td>${all.alpha3_code}</td>
</tr>

</table>

</div> */}




            
          