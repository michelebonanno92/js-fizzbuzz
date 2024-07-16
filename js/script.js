// ciclo  conteggio numeri  partendo da 1 fino per arrivare a 100
for ( let i = 1 ; i <=100 ; i++ ) {
 // se i(numero del ciclo) è multiplo di 3 e di  5 sostituisci i numeri e stampi FizzBuzz
   if ( i % 3 == 0 && i % 5 == 0 ){
      console.log("FizzBuzz");
 // se i(numero del ciclo) è multiplo di 3  sostituisci i numeri e stampi Fizz
   } else if (i % 3 == 0) { 
      console.log("Fizz");
 //  se i(numero del ciclo) è multiplo di 5 sostituisci i numeri e stampi Buzz
   }else if (i % 5 == 0) {
      console.log("Buzz");
 //   altrimeti stampa i numeri che non sono multipli ne di 3 e ne di 5
   } else {
      console.log(i);
   }
}  





