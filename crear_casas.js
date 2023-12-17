function crearCasa() {
  var nombreCasa = document.getElementById('nombreCasa').value;
  if (!nombreCasa) {
    alert('Por favor, ingresa el nombre de la casa.');
    return;
  }
  var casas = JSON.parse(sessionStorage.getItem('casas')) || [];
  casas.push(nombreCasa);
  sessionStorage.setItem('casas', JSON.stringify(casas));

  window.location.href = 'tus_casas.html';
}