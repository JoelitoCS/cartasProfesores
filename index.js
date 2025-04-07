const bd = [
    { nombre: "Eva Aranda", url_imagen: "imagenes/fotoeva.png", rol: "Professora" },
    { nombre: "Carlos Arrebola", url_imagen: "imagenes/foto2_carlos.jpg", rol: "Professor" },
    { nombre: "Carles Cardelo", url_imagen: "imagenes/carles-2.jpg", rol: "Professor" },
    { nombre: "Joan Domingo", url_imagen: "imagenes/joan-1.jpg", rol: "Professor" },
    { nombre: "Fran Méndez", url_imagen: "imagenes/foto_fran.jpg", rol: "Professor" },
    { nombre: "Juan Montero", url_imagen: "imagenes/juan_montero.jpg", rol: "Professor" },
    { nombre: "Albert Arrebola", url_imagen: "imagenes/foto_albert.png", rol: "Professor" },
    { nombre: "Óscar García", url_imagen: "imagenes/fotooscar.png", rol: "Professor" },
    { nombre: "Anna Rovira", url_imagen: "imagenes/anna_rovira1.jpg", rol: "Professora" },
    { nombre: "Patricia Salinas", url_imagen: "imagenes/patricia_salinas.jpg", rol: "Professora" },
    { nombre: "Juan Luis Sánchez", url_imagen: "imagenes/juan_luis_sanchez.jpg", rol: "Professor" },
    { nombre: "Raúl Sánchez", url_imagen: "imagenes/raul-2.jpg", rol: "Professor" },
    { nombre: "Francisca Triviño", url_imagen: "imagenes/francisca_tri.jpg", rol: "Professora" },
];

function mostrarProfesores(){
    let tarjetas = "";
    for(let i = 0; i < bd.length; i++) {
        tarjetas += `
            <div class="tarjeta">
                <div class="imagen">
                    <img src="${bd[i].url_imagen}" alt="${bd[i].nombre}">
                </div>
                <div class="nombre">${bd[i].nombre}</div>
                <div class="rol">${bd[i].rol}</div>
            </div>
        `;
    }

    document.querySelector(".contenedor").innerHTML = tarjetas;
}

mostrarProfesores();
