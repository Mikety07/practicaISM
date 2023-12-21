document.addEventListener('DOMContentLoaded', function() {
    var nombreCasa = sessionStorage.getItem('nombreCasaActual') || 'Casa Desconocida';
    document.getElementById('nombreCasa').textContent = nombreCasa;
  
    cargarZonas();
  });
  

function cargarZonas() {
  var zonas = JSON.parse(sessionStorage.getItem('zonas')) || [];
  var container = document.getElementById('zonasContainer');

  container.innerHTML = '';

  zonas.forEach(function(nombreZona, index) {
    var zonaDiv = document.createElement('div');
    zonaDiv.className = 'zona';

    zonaDiv.innerHTML = `
    <div class="image-container">
        <img src="imagenes/salon.png" alt="Imagen de la zona" />
    </div>
    <p>${nombreZona}</p>
    `;

    /* zonaDiv.onclick = function() {
        abrirZonas(nombreZona);
    }; */
      container.appendChild(zonaDiv);
});
}
window.onload = cargarZonas;
  