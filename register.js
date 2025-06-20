const inputUser = document.querySelector("#log-usuario")
const inputPassword = document.querySelector("#log-senha")
const inputConfirmPassword = document.querySelector("#log-confirmar-senha")
const btnRegister = document.querySelector("#SignInBtn")

const cadastroUsuario = () => {
    let user = inputUser.value
    let password = inputPassword.value
    let confirmPassword = inputConfirmPassword.value

    if (user.trim() != "" && password == confirmPassword) {
        localStorage.setItem("user", user)
        localStorage.setItem("password", password)
        window.location.href = "../../index.html"
        alert("Usuario cadastrado com sucesso!")
        return;
    }

    if (user.trim() == "") {
        alert("Digite um usuario")
    } else if (password != confirmPassword) {
        alert("Confirmação de senha incorreta")
    }
}

btnRegister.addEventListener("click", cadastroUsuario)