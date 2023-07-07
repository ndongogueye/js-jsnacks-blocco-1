let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let numeriDispari = (i % 3)


for (let i = 0; i < numeri.length; i++) {
  if (i % 2 !== 0) { 
    numeriDispari += numeri[i];
  }
}

console.log(numeriDispari)
