var welcome = document.getElementById('welcome');
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
var logoutBtn=document.getElementById('logoutBtn');
logoutBtn.addEventListener('click',function(){
window.location.href='login.html';
})
if (currentUser) {
    welcome.textContent = `Welcome ${currentUser.nameValue}`;
} else {
    window.location.href = 'login.html';
}
