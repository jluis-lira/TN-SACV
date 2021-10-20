window.onload =init;
var headers ={};

function init(){
    if(localStorage.getItem("token")){
        headers = {
            headers:{
                'Authorization':"bearer " + localStorage.getItem("token")
            }
        }
    document.querySelector('#btn-primary').addEventListener('click', update);
    }else{
        window.location.href="index.html";
    }
}

function update(){
    var id =document.getElementById('id').value;
    var name =document.getElementById('first_name').value;
    var last =document.getElementById('last_name').value;
    var phone =document.getElementById('phone_number').value;
    var email =document.getElementById('email').value;
    var address =document.getElementById('address').value;

    axios({
        method: 'put',
        url:'http://localhost:3000/employee/'+id,
        data:{
            employee_id:id,
            first_name:name,
            last_name:last,
            phone_number:phone,
            email:email,
            address:address
        },
        headers:{
            'Authorization':"bearer " + localStorage.getItem("token")
        }
    }).then(function(res){
        alert("Modificación realizada");
        window.location.href="employee.html";
    }).catch(function(err){
        console.log(err);
    })

}