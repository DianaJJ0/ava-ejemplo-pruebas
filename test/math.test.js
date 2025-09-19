// test/math.test.js
import test from "ava";
import { add, multiplicar } from "../src/math.js";

// Prueba unitaria para add
test("add() suma dos números correctamente", (t) => {  //" t " es el objeto de aserción de AVA  que permite realizar verificaciones en las pruebas.
  t.is(add(2, 3), 5);
  // Prueba adicional
  t.is(add(-1, 1), 0);
});

// Prueba unitaria para multiplicar
test("multiplicar() multiplica correctamente", (t) => {
  t.is(multiplicar(3, 4), 12);
});

 // Prueba adicional
 test("multiplicar() multiplica correctamente con números negativos", (t) => {
   t.is(multiplicar(-2, 3), -6);
 });
