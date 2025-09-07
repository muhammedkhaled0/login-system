var signupBtn = document.getElementById('signupBtn');
var emailInput = document.getElementById('emailInput');
var nameInput = document.getElementById('nameInput');
var passwordInput = document.getElementById('passwordInput');
var myform=document.getElementById('myform');
var alertSuccess=document.getElementById('alertSuccess');
var alertDanger=document.getElementById('alertDanger');
var alertExist=document.getElementById('alertExist');
var clientsArray;
if(localStorage.length==0){
    clientsArray=[];
}
else{
    clientsArray=JSON.parse(localStorage.getItem('clients'));
}
var myInputValues={
    nameValue:nameInput.value,
    emailValue:emailInput.value,
    passwordValue:passwordInput.value,
}

myform.addEventListener('submit',function(e){
    e.preventDefault();
})
function validateInputs(emailValue,passwordValue,nameValue) {
    var regex = {
        nameInput: /[\w]{5,20}/,
        emailInput: /^[a-zA-Z0-9](\.?[a-zA-Z0-9]){2,29}@gmail\.com$/,
        passwordInput: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
    };

    if (regex.emailInput.test(emailValue)&&regex.passwordInput.test(passwordValue)&&regex.nameInput.test(nameValue)) {
        
        return true;
    } 
    else{
        return false;
    }
}
signupBtn.addEventListener('click',function () {
    var isFound=false;
     myInputValues.nameValue=nameInput.value;
     myInputValues.emailValue=emailInput.value;
     myInputValues.passwordValue=passwordInput.value;
     for(var i=0;i<clientsArray.length;i++){
        if(clientsArray[i].emailValue==myInputValues.emailValue){
            alertExist.classList.remove('d-none');
              alertSuccess.classList.add('d-none');
        alertDanger.classList.add('d-none');
            isFound=true;
            
        }
     }
     if(!isFound){
    if(validateInputs(myInputValues.emailValue,myInputValues.passwordValue,myInputValues.nameValue)){
        clientsArray.push(myInputValues);
        localStorage.setItem('clients',JSON.stringify(clientsArray));
        alertExist.classList.add('d-none');
        alertSuccess.classList.remove('d-none');
        alertDanger.classList.add('d-none');
        nameInput.value=null;
        emailInput.value=null;
        passwordInput.value=null;

        
    }
    else{
        alertExist.classList.add('d-none');
        alertSuccess.classList.add('d-none');
        alertDanger.classList.remove('d-none');
    }
}
})
