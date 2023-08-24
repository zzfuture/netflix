let construirEncabezado = async(file)=>{
    let peticion = await fetch(`${file}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#encabezado");
    seleccion.insertAdjacentHTML("beforeend", /*html*/`
        <div class="pricing-header py-3 pb-md text-start">
        <h1 class="fs-6 fw-normal text-body-emphasis">${res.header.steps}</h1>
        <p class="fs-2 fw-bold">${res.header.titulo}</p>
        ${res.header.parrafo.map(value => /*html*/
            `<p class="d-flex align-items-center fw-semibold"><svg class="bi text-danger" width="24" height="24">
                <use xlink:href="#check" /></svg>&ensp;${value.texto}
            </p>`
        ).join('')}
        </div>
        `);
}
construirEncabezado("config");

let construirNavbar = async(file)=> {
    let peticion = await fetch(`${file}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#navbar");
    seleccion.insertAdjacentHTML("beforeend", /*html*/`
    <div class="container-fluid py-3">
      <a class="px-5" href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <img class="netflixlogo"
          src=${res.navbar.logo}
          alt="logo">
      </a>
      <a class="px-5 link-body-emphasis text-decoration-none" href="#">Sign In</a>
    </div>
    `);
}
construirNavbar("config");