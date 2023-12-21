function cargarCasas() {
  var casas = JSON.parse(sessionStorage.getItem('casas')) || [];
  var container = document.querySelector('.casas-container');

  container.innerHTML = '';

  casas.forEach(function(nombreCasa, index) {
      var casaDiv = document.createElement('div');
      casaDiv.className = 'house';

      casaDiv.innerHTML = `
        <div class="image-container">
          <img src="imagenes/casa.png" alt="Imagen de la casa" />
        </div>
        <p>${nombreCasa}</p>
      `;

      casaDiv.onclick = function() {
        abrirZonas(nombreCasa);
    };
      container.appendChild(casaDiv);
  });
}
window.onload = cargarCasas;

function abrirZonas(nombreCasa) {
  sessionStorage.setItem('nombreCasaActual', nombreCasa);
  window.location.href = 'tus_zonas.html';
}







  