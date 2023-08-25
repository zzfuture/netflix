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

let construirTabla = async (file) => {
  let peticion = await fetch(`${file}.json`);
  let res = await peticion.json();
  let seleccion = document.querySelector("#table");
  let porcentaje = 70/(res.plans.table.length);
  let lastTable = (res.plans.table[res.plans.table.length - 1]);
  let tableArray = (res.plans.table);
  tableArray.pop();
  seleccion.insertAdjacentHTML("beforeend", /*html*/`
  <thead>
    <tr>
      <th style="width: 34%;"></th>
      ${tableArray.map(value => /*html*/`
      <th style="width: ${porcentaje}%;">${value.tier}</th>
      `).join('')}
      <th class="text-danger" style="width: ${porcentaje}%;">${lastTable.tier}</th>
    </tr>
  </thead>
  <tbody>
  <th scope="row" class="text-start">Monthly price</th>
  ${tableArray.map(value => /*html*/`
    <td>${value.price}</td>
  `).join('')}
      <td class="text-danger">${lastTable.price}</td>
  </tbody>
  <tbody>
  <th scope="row" class="text-start">Video quality</th>
  ${tableArray.map(value => /*html*/`
    <td>${value.quality}</td>
  `).join('')}
      <td class="text-danger">${lastTable.quality}</td>
  </tbody>
  <tbody>
  <th scope="row" class="text-start">Resolution</th>
  ${tableArray.map(value => /*html*/`
    <td>${value.resolution}</td>
  `).join('')}
      <td class="text-danger">${lastTable.resolution}</td>
  </tbody>
  <tbody>
  <th scope="row" class="text-start">Watch on your TV, computer, mobile phone and tablet</th>
  ${tableArray.map(value => /*html*/`
    <td><svg class="bi text-center" width="24" height="24">
    <use xlink:href="#check" />
  </svg></td>
  `).join('')}
    <td class="text-danger"><svg class="bi text-center" width="24" height="24"><use xlink:href="#check" /></svg></td>
  </tbody>
  `);
}
construirTabla("config");

let preFooter = async (file) => {
  let peticion = await fetch(`${file}.json`);
  let res = await peticion.json();
  let seleccion = document.querySelector("#prefooter");
  seleccion.insertAdjacentHTML("beforeend", /*html*/`
  <p class="fs-6">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a> for more details.
          Only people who live with you may use your account. Watch on 4 different devices at the same time witz Premium, 2 with Standard and 1 with Basic.
  </p>
  <div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-danger py-3 fs-4" type="button">Next</button>
  </div>
  `)
}
preFooter("config");

let footer = async (file) => {
  let peticion = await fetch(`${file}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#footer");
    seleccion.insertAdjacentHTML("beforeend", /*html*/`
    <p>${res.footer.questions}</p>
    <div class="d-flex flex-wrap ps-0 gap-3">
      <ul class="ps-0">
        <p><a class="text-decoration-none text-dark" href="#">${res.footer.btn1}<ap></ap></p>
        <p><a class="text-decoration-none text-dark" href="#">${res.footer.btn2}<ap></ap></p>
      </ul>
      <ul>
        <p><a class="text-decoration-none text-dark" href="#">${res.footer.btn3}</a></p>
        <p><a class="text-decoration-none text-dark" href="#">${res.footer.btn4}</a></p>
      </ul>
      <ul>
        <p><a class="text-decoration-none text-dark" href="#">${res.footer.btn5}</a></p>
        <p><a class="text-decoration-none text-dark" href="#">${res.footer.btn6}</a></p>
      </ul>
      <p><a class="text-decoration-none text-dark" href="#">${res.footer.btn7}</a></p>
    </div>
    `);
}
footer("config");