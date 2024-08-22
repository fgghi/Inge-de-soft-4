import { generarFizzBuzz, generarCadenaFizzBuzz } from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("generar el mismo numero si no sigue ninguna regla", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
  it("generar el mismo numero para cualquier si no sigue ninguna regla", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });
  it("generar Fizz para 3", () => {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
  });
  it("generar Fizz para multiplo de 3", () => {
    expect(generarFizzBuzz(6)).toEqual("Fizz");
  });
  it("generar Buzz para multiplo de 5", () => {
    expect(generarFizzBuzz(5)).toEqual("Buzz");
  });
  it("generar FizzBuzz para multiplo de 5 y 3", () => {
    expect(generarFizzBuzz(15)).toEqual("FizzBuzz");
  });
  it("generar cadena", () => {
    expect(generarCadenaFizzBuzz(10)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]);
  });
});

