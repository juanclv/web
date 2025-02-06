const elemento = document.getElementById('elemento');
const body = document.body;

// Función para generar un color aleatorio en formato hexadecimal
function generarColorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

document.addEventListener('mousemove', (evento) => {
  const x = evento.clientX - elemento.offsetWidth / 2;
  const y = evento.clientY - elemento.offsetHeight / 2;

  elemento.style.left = x + 'px';
  elemento.style.top = y + 'px';

  // Cambia el color del elemento
  const color = generarColorAleatorio();
  elemento.style.backgroundColor = color;

  // Crea un elemento de estela con el mismo color y tamaño
  const estela = document.createElement('div');
  estela.classList.add('estela');
  estela.style.left = x + 'px';
  estela.style.top = y + 'px';
  estela.style.backgroundColor = color;
  estela.style.width = elemento.offsetWidth + 'px';
  estela.style.height = elemento.offsetHeight + 'px';
  body.appendChild(estela);

  // Elimina la estela después de 5 segundos
  setTimeout(() => {
    estela.style.opacity = 0;
    estela.style.width = 0 + 'px';
    estela.style.height = 0 + 'px';
    setTimeout(() => {
      body.removeChild(estela);
    }, 500);
  }, 5000);
});
