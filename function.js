init = ()=>{
    localData = JSON.parse(localStorage.getItem('manager-data'));
    if(localData){
        data = localData;
    }else{
        data = []
    }
    
    renderDataToTable(data);
}

renderDataToTable = (data)=>{
    tbody = document.getElementById("tbody");
    temp = `<tr class="table-header">
    <th>SL No</th>
    <th>Name</th>
    <th>Amount</th>
    <th>Comments</th>
    <th>Date</th>
    <th>Action</th>
    </tr>`;
    let sl = 1;
    for(element of data){
        temp = temp + `<tr>
        <td>${sl}</td>
        <td>${element.name}</td>
        <td>${element.amount}</td>
        <td>${element.comments}</td>
        <td>${element.date}</td>
        <td>
            <button onClick="deleteData(${element.id})" class="btn btn-danger">Delete</button>
        </td>
    </tr>`;
    sl++;
    }
    tbody.innerHTML = temp;

}

deleteData = (id)=>{
    localData = JSON.parse(localStorage.getItem('manager-data'));
    index = localData.findIndex((element)=>{
        return element.id == id;
    })
    localData.splice(index, 1)
    localStorage.setItem('manager-data', JSON.stringify(localData));
    init();
}