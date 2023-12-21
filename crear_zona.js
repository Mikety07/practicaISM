function crearZona() {
    var nombreZona = document.getElementById('nombreZona').value;
    if (!nombreZona) {
      alert('Por favor, ingresa el nombre de la zona.');
      return;
    }
    var zonas = JSON.parse(sessionStorage.getItem('zonas')) || [];
    zonas.push(nombreZona);
    sessionStorage.setItem('zonas', JSON.stringify(zonas));
  
    window.location.href = 'tus_zonas.html';
  }