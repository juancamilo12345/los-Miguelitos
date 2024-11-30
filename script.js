function jugar(eleccionUsuario) {
    let opciones = ["piedra", "papel", "tijeras"];
 
    let eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
 
    if (eleccionUsuario === eleccionMaquina) {
      alert("Empate. Ambos eligieron " + eleccionUsuario + ".");
    } else if (
      (eleccionUsuario === "piedra" && eleccionMaquina === "tijeras") ||
      (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
      (eleccionUsuario === "tijeras" && eleccionMaquina === "papel")
    ) {
      alert("¡Ganaste! Tú eliges " + eleccionUsuario + " y la máquina elige " + eleccionMaquina + ".");
    } else {
      alert("Perdiste. Tú eliges " + eleccionUsuario + " y la máquina elige " + eleccionMaquina + ".");
    }
  }

let eleccionUsuario = prompt("Elige: piedra, papel o tijeras");

if (eleccionUsuario === "piedra" || eleccionUsuario === "papel" || eleccionUsuario === "tijeras") {
  jugar(eleccionUsuario);
} else {
  alert("Elección inválida. Por favor, elige piedra, papel o tijeras.");