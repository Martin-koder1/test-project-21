// For Loops

for (
    let i = 0; // Declares a variable that starts with 0
    i < 5; // Checks if variabel is less than 5
    i++ // Adds the index + idex to count a iteration
    ) { 
        console.log("Hello World!");
        console.log(i);
};

console.log("---------------------------------------------------");

for (let index = 0; index < 5; index++) {
    console.log("Hei Verden");
    console.log(index);
};

console.log("---------------------------------------------------");
// Oppgave: Lag en variabel som lager en basic array/flat array

const Fruits = ["Apple", "Pear", "Banana"];
// console.log(Fruits[0])
// console.log(Fruits[1])
// console.log(Fruits[2])

for (let index = 0; index < Fruits.length; index++) {
    console.log(index);
    console.log(Fruits[index]);
};

console.log("---------------------------------------------------");
// Oppgave: Lage en ny variabel som lagrer en basic array/flar array
//          Sett opp en 'for loop' som logger gjennom alle array elementer

const Pockets = ["Cash", "Phone", "Keys"];

for (let index = 0; index < Pockets.length; index++) {
    console.log(Pockets[index]);
};

console.log("---------------------------------------------------");

for (let index = 5; index > 0; index--) {
    console.log(index);
};