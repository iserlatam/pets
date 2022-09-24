const btnGuardar = document.querySelector('#enviar');
btnGuardar.addEventListener('click', enviar => {
    let user = new Object();
    user.Email = document.getElementById("email").value;;

    user.Username = document.getElementById("username").value;

    user.Pasword = document.getElementById("pwd").value;

    localStorage.setItem('data', JSON.stringify(user));
    let user1 = localStorage.getItem('data');
    user1 = JSON.parse(user1);

    sessionStorage.setItem('data', JSON.stringify(user));
    let user2 = sessionStorage.getItem('data');
    user2 = JSON.parse(user2);

});