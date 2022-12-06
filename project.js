
let form = document.getElementById('add-data-form');


init();

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let name = e.target.name.value;
    let amount = e.target.amount.value;
    let date = e.target.date.value;
    let comments = e.target.comments.value;
    localData = JSON.parse(localStorage.getItem('manager-data'));
    if(localData && localData.length>0){
        console.log(localData)
        id = localData[localData.length-1].id+1;
        console.log(localData[localData.length-1])
    }else{
        id = 1;
    }
    data.push(
        {id, name, amount,comments, date}
    );
    localStorage.setItem("manager-data", JSON.stringify(data));
    renderDataToTable(data);
});

