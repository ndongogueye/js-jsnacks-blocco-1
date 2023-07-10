let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let somma = 0


for (let i = 0; i < numeri.length; i++) {
  if (i % 2 !== 0) { 
    somma += numeri[i];
  }
}

console.log(somma)
