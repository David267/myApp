window.addEventListener("load",doFirst,false);

function doFirst() {

     option = document.getElementsByName('optionsRadios2');
     password = document.getElementById('password');
     coins = document.getElementById('coins');
     button = document.getElementById('button');

}

function add() {
    password.removeAttribute('disabled');
    coins.removeAttribute('disabled');
    option[0].removeAttribute('disabled');
    option[1].removeAttribute('disabled');
    button.className = 'btn btn-success btn-block';
    button.innerHTML = 'Register a new User';
}
function remove() {
    password.setAttribute('disabled','disabled');
    coins.setAttribute('disabled','disabled');
    option[0].setAttribute('disabled','disabled');
    option[1].setAttribute('disabled','disabled');
    button.className = 'btn btn-danger btn-block';
    button.innerHTML = 'Delete User';
}
