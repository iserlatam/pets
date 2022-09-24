import { getData } from "../modules/getData.mjs";

const id = localStorage.getItem("idMascota");

const url = `http://localhost:3000/gatos/${id}`;

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const data = await getData(url);
    const {
      imagenesRelacionadas,
      nombreMascota,
      genero,
      raza,
      colorOjos,
      personalidad,
      esterilizado,
      vacuna,
      info,
      precioAdopcion,
      duennoContacto
    } = data;

    document.querySelector("#relatedImg1").src = imagenesRelacionadas[0];
    document.querySelector("#relatedImg2").src = imagenesRelacionadas[1];
    document.querySelector("#relatedImg3").src = imagenesRelacionadas[2];
    document.querySelector("#relatedImg4").src = imagenesRelacionadas[3];

    document.querySelector("#petname").textContent = nombreMascota;

    document.querySelector("#genero").textContent = genero;
    document.querySelector("#raza").textContent = raza;
    document.querySelector("#colorOjos").textContent = colorOjos;

    document.querySelector("#pers1").textContent = personalidad[0];
    document.querySelector("#pers2").textContent = personalidad[1];
    document.querySelector("#pers3").textContent = personalidad[2];

    document.querySelector("#esterilizado").textContent = esterilizado;
    document.querySelector("#vacuna").textContent = vacuna;

    document.querySelector("#info").textContent = info;
    
    document.querySelector("#precio").textContent = precioAdopcion;

    document.querySelector("#contact").href = duennoContacto;
  } catch (error) {
    console.log(error);
  }
  console.log(url);
});
