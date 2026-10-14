const boton = document.querySelector('#saludo');
const mensaje = document.querySelector('#mensaje');

boton.addEventListener('click', () => {
  mensaje.textContent = '¡Hola! Esta es mi primera versión.';
});
