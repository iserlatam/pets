export const printProducts = (data, template, box1) => {

    box1.innerHTML = '';

    const fragment = document.createDocumentFragment();
    data.forEach(producto => {
        const { id, nombre, imagenprod, etapa, tipoproducto } = producto;
        template.querySelector('a').id = id;
        template.querySelector('h4').textContent = nombre;
        template.querySelector(".imgCardPet").src = imagenprod;
        template.querySelector('.etapa').textContent = etapa;
        template.querySelector('.tipoproducto').textContent = tipoproducto;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);

    });

    box1.appendChild(fragment);
};