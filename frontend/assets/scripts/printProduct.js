import { getData } from "../modules/getData.mjs";

const id = localStorage.getItem('idproducto');

const url = `http://localhost:3000/producto/${id}`;

document.addEventListener('DOMContentLoaded', async() => {
    try {
        let data = await getData(url);
        const {
            imagenesRelacionadas,
            nombre,
            precio,
            descripcion,
            etapa,
            tipoproducto
        } = data;

        document.querySelector('#relatedImg1').src = imagenesRelacionadas[0];
        document.querySelector('#relatedImg2').src = imagenesRelacionadas[1];
        document.querySelector('#relatedImg3').src = imagenesRelacionadas[2];
        document.querySelector('#relatedImg4').src = imagenesRelacionadas[3];
        document.querySelector('#productname').textContent = nombre;
        document.querySelector('#etapa').textContent = etapa;
        document.querySelector('#tipoprod').textContent = tipoproducto;
        document.querySelector('#descripcion').textContent = descripcion;
        document.querySelector('#precio').textContent = precio;

    } catch (error) {
        console.log(error);
    }
    console.log(url)
});