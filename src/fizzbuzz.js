function generarFizzBuzz(numero){
  if(numero % 3 == 0&&numero % 5 == 0)
  {
    numero="FizzBuzz"
  }
  if (numero==3||numero % 3 == 0)
    {
      numero="Fizz";
    }  
  if (numero==5||numero % 5 == 0)
    {
      numero="Buzz";
    }    
  return numero+"";
}
function generarCadenaFizzBuzz(max){
  let element=[];
  for (let index = 1; index <= max; index++) {
    
    element.push(generarFizzBuzz(index));
  }
  return element;
  }
export { generarFizzBuzz, generarCadenaFizzBuzz };

