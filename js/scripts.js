/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

function mostrarDetalles() {
    var nuevoTexto = "<ul>\
                        <li>Ofrecemos vehículos con capacidad que varía desde 2 hasta 30 pallets, adaptándonos a las necesidades específicas de tu carga.</li>\
                        <li>Cubrimos un rango de peso desde 1500 kg hasta 30 TN para asegurar que podamos manejar cargas de diferentes tamaños.</li>\
                        <li>Todos nuestros vehículos están debidamente habilitados por la CNRT (Comisión Nacional de Regulación del Transporte).</li>\
                        <li>Contamos con certificaciones de la VTV (Verificación Técnica Vehicular) para cargas generales y peligrosas, garantizando la seguridad en cada trayecto.</li>\
                        <li>Cumplimos con los registros municipales necesarios para operar legalmente en todas las jurisdicciones.</li>\
                        <li>Nuestros conductores mantienen exámenes psicofísicos al día, asegurando su aptitud para el manejo seguro de las cargas.</li>\
                    </ul>\
                    <div class='intro-button mx-auto'>\
                        <a class='btn btn-secondary btn-xl' href='javascript:void(0);' onclick='restaurarTexto()'>Volver al Texto Anterior</a>\
                    </div>";

    $('.text-container .intro-text').html(nuevoTexto);
}

function restaurarTexto() {
    var textoAnterior = "<h1 class='section-heading mb-4'>Documentación y Vehículos</h1>\
                        <p class='mb-3'>Nuestros vehículos y operarios cumplen rigurosamente con todas las normativas establecidas por el Mercosur para el transporte de cargas generales y peligrosas. Contamos con chóferes debidamente habilitados y capacitados con cursos específicos para el manejo seguro de todo tipo de cargas peligrosas.</p>\
                        <div class='d-flex flex-wrap justify-content-center'>\
                            <img class='product-item-img mx-2 rounded img-fluid mb-3 mb-lg-0' src='assets/img/cnrt3.png' alt='...' style='width: 150px;'>\
                            <img class='product-item-img mx-2 rounded img-fluid mb-3 mb-lg-0' src='assets/img/vtv2.png' alt='...' style='width: 150px;'>\
                        </div>\
                        <div class='intro-button mx-auto'>\
                            <a class='btn btn-secondary btn-xl' href='javascript:void(0);' onclick='mostrarDetalles()'>Detalles de Vehículos y Habilitaciones</a>\
                        </div>";

    $('.text-container .intro-text').html(textoAnterior);
}

function toggleAnswer(item) {
    var answer = item.querySelector('.answer');
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}