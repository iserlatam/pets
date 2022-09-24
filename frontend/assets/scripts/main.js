import { getData } from './../modules/getData.mjs';
import { printCards } from './../modules/printCards.mjs';
import { printProducts } from './../modules/printProducts.mjs';
import * as impConst from './../modules/constantes.mjs';




try {
    const data = await getData(impConst.url + 'gatos');
    console.log(data)
    printCards(data, impConst.templateCard, impConst.boxCards);
} catch (error) {
    console.error(error);
}


try {
    const data = await getData(impConst.url + 'producto');
    console.log(data)
    printProducts(data, impConst.templateCard1, impConst.boxCards1);
} catch (error) {
    console.error(error);
}


document.addEventListener('click', ({ target }) => {
    console.log(target)
    if (target.classList.contains('mascota')) {
        localStorage.setItem('idMascota', target.id);
        window.location.href = 'assets/pages/pet.html';
    }
});

document.addEventListener('click', ({ target }) => {
    console.log(target)
    if (target.classList.contains('mascota1')) {
        localStorage.setItem('idproducto', target.id);
        window.location.href = 'assets/pages/product.html';
    }
});

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