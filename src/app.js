import "bootstrap";
import "./style.css";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateExcuse() {
  const who = ['Mi gato', 'Mi primo', 'El vecino', 'Un fantasma'];
  const action = ['se comió', 'tiró', 'perdió', 'rompió'];
  const what = ['mi desayuno', 'mi mochila', 'las llaves', 'mi teléfono'];
  const when = ['antes de salir', 'cuando dormía', 'mientras hacía tarea', 'cuando iba a la escuela'];

  const excuse = `${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}.`;

  document.getElementById('excuse').textContent = excuse;
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generate-btn");
  button.addEventListener("click", generateExcuse);
  generateExcuse();
});