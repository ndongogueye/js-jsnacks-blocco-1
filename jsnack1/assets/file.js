let nomi = ["Mario", "Luigi", "Giovanni", "Francesca", "Maria", "Antonio"];
let cognomi = ["Rossi", "Bianchi", "Verdi", "Russo", "Ferrari", "Esposito"];


for (let i = 0; i < 30; i++) {
    let nomeCasuale = nomi [Math.floor(Math.random() * nomi.length)];
    let cognomeCasuale = cognomi [Math.floor(Math.random() * cognomi.length)];

    console.log(nomeCasuale + cognomeCasuale)
}
   


  

