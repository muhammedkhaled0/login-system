var emailInput=document.getElementById('emailInput');
var passwordInput=document.getElementById('passwordInput');
var loginBtn=document.getElementById('loginBtn');
var myform=document.getElementById('myform');
var alertDanger=document.getElementById('alertDanger');
var clientsArray;
if(localStorage.length==0){
    clientsArray=[];
}
else{
    clientsArray=JSON.parse(localStorage.getItem('clients'));
}
myform.addEventListener('submit',function(e){
    e.preventDefault();
})

loginBtn.addEventListener('click',function(){
    var isFound=false;
      for(var i=0;i<clientsArray.length;i++){
        if(clientsArray[i].emailValue==emailInput.value&&clientsArray[i].passwordValue==passwordInput.value){
            alertDanger.classList.add('d-none');
            isFound=true;
             localStorage.setItem('currentUser', JSON.stringify(clientsArray[i]));
            window.location.href='success.html';
           break;
        }
     }
     if(!isFound){
        alertDanger.classList.remove('d-none');
     }
})