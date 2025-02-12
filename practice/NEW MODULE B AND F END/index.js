async function getData(){
    let response = await fetch('http://localhost:3008/')
    let data =  await response.json()
    displayData(data)
}
let bodyContainer = document.getElementById('container')
function displayData(data){
    data.forEach(element => {
        let div =  document.createElement('div');
        div.className= 'ItemContainer'
        div.innerHTML = `
        <div class='imageConater'>
        <img src='${element.hospitalImage}' class='image'/>
        </div>
        <div class='detailsConatiner'>
        <span class="details"> ${element.hospitalName}</span>
        <span class="details">${element.hospitalCategory}</span>
        </div>
        `
        bodyContainer.appendChild(div)
    });
}

getData()