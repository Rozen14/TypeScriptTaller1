import { series } from "./data.js";
const lista = document.getElementById("versiones");
const detalle = document.getElementById("detalle");
function mostrarSeries() {
    series.forEach((serie) => {
        const item = document.createElement("li");
        item.className = "list-group-item";
        item.textContent = serie.titulo;
        item.addEventListener("click", () => mostrarDetalle(serie));
        lista.appendChild(item);
    });
}
function mostrarDetalle(serie) {
    detalle.innerHTML = `
        <div class="card">
            <img src="${serie.imagen}" class="card-img-top" alt="${serie.titulo}">
            <div class="card-body">
                <h5 class="card-title">${serie.titulo}</h5>
                <p class="card-text">${serie.descripcion}</p>
                <p class="card-text"><strong>Año:</strong> ${serie.anio}</p>
                <p class="card-text"><strong>Tipo:</strong> ${serie.tipo}</p>
            </div>
        </div>
    `;
}
mostrarSeries();
