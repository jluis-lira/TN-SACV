window.onload =init;
var headers ={};

function init(){
    if(localStorage.getItem("token")){
        headers = {
            headers:{
                'Authorization':"bearer " + localStorage.getItem("token")
            }
        }
    document.querySelector('#btn-primary').addEventListener('click', deleted);
    }else{
        window.location.href="index.html";
    }
}

function deleted(){
    var id =document.getElementById('id').value;

    axios({
        method: 'delete',
        url:'http://localhost:3000/employee/'+id,
        headers:{
            'Authorization':"bearer " + localStorage.getItem("token")
        }
    }).then(function(res){
        alert("Registro eliminado");
        window.location.href="employee.html";
    }).catch(function(err){
        console.log(err);
    })

}