const numero = parseFloat(prompt("Ingresa un número:"));

if (!isNaN(numero)) {
  if (numero > 0) {
    console.log("El número ingresado es positivo");
    alert("El número ingresado es positivo");
  } else if (numero < 0) {
    console.log("El número ingresado es negativo");
    alert("El número ingresado es negativo");
  } else {
    console.log("El número ingresado es igual a 0");
    alert("El número ingresado es igual a 0");
  }
} else {
  console.log("El número ingresado no es un número");
  alert("El número ingresado no es un número");
}
