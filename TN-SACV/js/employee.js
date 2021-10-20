window.onload =init;
var headers ={};
var url ="http://localhost:3000";

function init(){
    if(localStorage.getItem("token")){
        headers = {
            headers:{
                'Authorization':"bearer " + localStorage.getItem("token")
            }
        }
        loadEmployee();
        document.querySelector('#btn-add').addEventListener('click',function(){
            window.location.href="add.html"
        });
        document.querySelector('#btn-update').addEventListener('click',function(){
            window.location.href="update.html"
        });
        document.querySelector('#btn-search').addEventListener('click',function(){
            window.location.href="search.html"
        });
        document.querySelector('#btn-delete').addEventListener('click',function(){
            window.location.href="delete.html"
        });
    }else{
        window.location.href="index.html";
    }
}

function loadEmployee(){
    axios.get(url + "/employee",headers)
    .then(function(res){
        displayEmployee(res.data.message);
    }).catch(function (err) {
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

