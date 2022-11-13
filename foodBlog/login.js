import { signUp, signIn, logOut} from './firebase.js'

//set on click listners
document.getElementById('loginSubmit').onclick = function() {tryLogin()};

function tryLogin(){
    let form = document.getElementById("login-form")
    let password = form.querySelector('[name="password"]').value
    console.log(password)
    let email = form.querySelector('[name="email"]').value
    console.log(email)
    let user = signIn(password,email)
}