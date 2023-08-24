let construirEncabezado = async(file)=>{
    let peticion = await fetch(`${file}.json`);
    console.log(peticion)
    let res = await peticion.json();
    console.log(res.section.parrafo[0].texto)
    let seleccion = document.querySelector("#encabezado");
    seleccion.insertAdjacentHTML("beforeend", /*html*/`
        <div class="pricing-header py-3 pb-md text-start">
        <h1 class="fs-6 fw-normal text-body-emphasis">STEP 1 OF 3</h1>
        <p class="fs-2 fw-bold">Choose the plan that’s right for you</p>
        ${res.section.parrafo.map(value => /*html*/
            `<p class="d-flex align-items-center fw-semibold"><svg class="bi text-danger" width="24" height="24">
                <use xlink:href="#check" /></svg>&ensp;${value.texto}
            </p>`
        ).join('')}
        </div>        
        `);
}
construirEncabezado("config")