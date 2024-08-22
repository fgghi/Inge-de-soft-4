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
export default generarFizzBuzz;