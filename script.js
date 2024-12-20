// Ciclo per stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // Multipli di 3 e 5
      console.log("FizzBuzz"); 
    } else if (i % 3 === 0) {
        // Multipli di 3
      console.log("Fizz"); 
    } else if (i % 5 === 0) {
        // Multipli di 5
      console.log("Buzz"); 
    } else {
        // Numeri normali
      console.log(i); 
    }
  }