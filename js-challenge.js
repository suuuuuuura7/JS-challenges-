  function whoPaying() {

    var array = [ "Alif", "Sura", "Roba", "Paul"];
   var n = Math.random();
   n = n * 4;
   n = Math.floor(n);
    
    alert(array[n]);

  }
   whoPaying();    

function fibonacciGenerator(n) {
  let fib = [];

  if (n === 1) {
    fib = [0];
  } else if (n === 2) {
    fib = [0, 1];
  } else {
    fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }

  return fib;
}
console.log(fibonacciGenerator(5));