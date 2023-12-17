function cargarCasas() {
    // Usamos sessionStorage en lugar de localStorage
    var casas = JSON.parse(sessionStorage.getItem('casas')) || [];
    var gridContainer = document.querySelector('.grid-container');
  
    gridContainer.innerHTML = ''; // Limpia el contenedor anterior
  
    casas.forEach(function(nombre) {
      var div = document.createElement('div');
      div.className = 'house';
      div.innerHTML = `
        <div class="image-container">
          <img src="imagenes/casa.png" alt="Imagen de la casa" />
        </div>
        <p>${nombre}</p>
      `;
      gridContainer.appendChild(div);
    });
  }

  window.onload = cargarCasas;
  