

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


function entrar(){
    window.location.href = './pages/home.html';   
    alert("Login efetuado com sucesso!")
}


function indisponivel(){
  alert("Tipo de login indisponível no momento.\nTente mais tarde.")
}

/* Tentativa de gravar novos usuários na base */
//function cadastrar(){
/*   
    const form = document.getElementById('userForm');
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const newUser = { "username": username, "password": password };
    
    fetch('users.json')
    
        .then(response => response.json())
        .then(users => {
        users.push(newUser);
        
        return users;
        })
        .then(updatedUsers => {
        return fetch('users.json', {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUsers),
        })
        })
        .then(() => {
        alert('User added successfully');
        })
        .catch((error) => {
        alert('Error adding user:', error);
        });
    });
*/
function login(){
    var username = document.getElementById("lgn-usr").value;
    var password = document.getElementById("lgn-pss").value;
    if(username=="admin" && password=="admin"){
      window.location.href = '../pages/home.html'; 
      alert("Login efetuado com sucesso!");
      
    }else{
      alert("Usuário ou senha incorretos.\nTente novamente.");
    }
}



