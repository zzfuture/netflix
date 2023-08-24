let construirEncabezado = async (file) => {
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

let construirNavbar = async (file) => {
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

let construirCard = async (file) => {
  let peticion = await fetch(`${file}.json`);
  let res = await peticion.json();
  let seleccion = document.querySelector("#card");
  let cardArray = res.card;
  let lastCard = res.card[res.card.length - 1];
  cardArray.pop();
  seleccion.insertAdjacentHTML("beforeend", /*html*/`
    ${cardArray.map(value => /*html*/`
    <div class="col">
    <div class="card mb-4 rounded-3">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">${value.tier}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">${value.precio}<small class="text-body-secondary fw-light">/mo</small>
        </h1>
      </div>
    </div>
  </div>
  `).join('')}
  `);
  seleccion.insertAdjacentHTML("beforeend", /*html*/`
    <div class="col">
    <div class="card mb-4 border-danger">
      <div class="card-header py-3 text-bg-danger">
        <h4 class="my-0 fw-normal">${lastCard.tier}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">${lastCard.precio}<small class="text-body-secondary fw-light">/mo</small>
        </h1>
      </div>
    </div>
  </div>
  `);
}
construirCard("config");

/*
<div class="col">
  <div class="card mb-4 rounded-3">
    <div class="card-header py-3">
      <h4 class="my-0 fw-normal">Basic</h4>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title">$6.99<small class="text-body-secondary fw-light">/mo</small>
      </h1>
    </div>
  </div>
</div>
<div class="col">
  <div class="card mb-4 rounded-3">
    <div class="card-header py-3">
      <h4 class="my-0 fw-normal">Standard</h4>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title">$15.49<small class="text-body-secondary fw-light">/mo</small>
      </h1>
    </div>
  </div>
</div>
<div class="col">
  <div class="card mb-4 border-danger">
    <div class="card-header py-3 text-bg-danger">
      <h4 class="my-0 fw-normal">Premium</h4>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title">$19.99<small class="text-body-secondary fw-light">/mo</small>
      </h1>
    </div>
  </div>
</div>

*/