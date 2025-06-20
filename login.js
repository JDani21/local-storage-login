const inputLogin = document.querySelector("#log-usuario")
const inputPassword = document.querySelector("#log-senha")
const btnLogin = document.querySelector("#SignInBtn").addEventListener("click", salvarLogin)

function salvarLogin() {
    localStorage.setItem("name", inputLogin.value)
    localStorage.setItem("password", inputPassword.value)
}