const boton = document.querySelector('#saludo');
const mensaje = document.querySelector('#mensaje');

boton.addEventListener('click', () => {
  mensaje.textContent = '¡Hola! Ya sé añadir, modificar y borrar archivos con Git.';
});
