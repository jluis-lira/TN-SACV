window.onload =init;
var headers ={};

function init(){
    if(localStorage.getItem("token")){
        headers = {
            headers:{
                'Authorization':"bearer " + localStorage.getItem("token")
            }
        }
    document.querySelector('#btn-primary').addEventListener('click', search);
    }else{
        window.location.href="index.html";
    }
}

function search(){
    var name =document.getElementById('first_name').value;

    axios({
        method: 'get',
        url:'http://localhost:3000/employee/search/'+name,
        headers:{
            'Authorization':"bearer " + localStorage.getItem("token")
        }
    }).then(function(res){
        alert("Buscando..");
        displayEmployee(res.data.message);
    }).catch(function(err){
        console.log(err);
    })

}

function  displayEmployee(employee){
    var tabla =document.querySelector(".datos");
    for(var i=0; i<employee.length;i++){
        tabla.innerHTML+= 
        `<tr>
            <td>${employee[i].employee_id}</td>
            <td>${employee[i].first_name}</td>
            <td>${employee[i].last_name}</td>
            <td>${employee[i].phone_number}</td>
            <td>${employee[i].email}</td>
            <td>${employee[i].address}</td>
        </tr>`
    }
}