export const printCards = (data, template, box) => {

    box.innerHTML = '';

    const fragment = document.createDocumentFragment();
    data.forEach(pet => {
        const { id, duennoNombre, duennoSitio, fotodueno, imagen, genero, raza, colorOjos } = pet;
        template.querySelector('a').id = id;
        template.querySelector(".img-card").src = fotodueno;
        template.querySelector('h4').textContent = duennoNombre;
        template.querySelector('span').textContent = duennoSitio;
        template.querySelector(".imgCardPet").src = imagen;
        template.querySelector('.genero').textContent = genero;
        template.querySelector('.raza').textContent = raza;
        template.querySelector('.ojos').textContent = colorOjos;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);

    });

    box.appendChild(fragment);
};