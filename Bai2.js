const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach(dog => {
    dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});

const sarahDog = dogs.find(dog => dog.owners.includes("Sarah"));
if(sarahDog) {
    console.log(`${sarahDog.owners.join(" and ")}'s dog: `);
    if(sarahDog.curFood > sarahDog.recFood * 1.1) {
        console.log("Eat too much!");
    }
    else if(sarahDog.curFood < sarahDog.recFood * 0.9) {
        console.log("Eat too little!");
    }
    else {
        console.log("Eat the right amount!");
    }
}

const ownersDogTooMuch = [];
const ownersDogTooLittle = [];
dogs.forEach(dog => {
    if(dog.curFood > dog.recFood * 1.1) {
        ownersDogTooMuch.push(...dog.owners);
    }
    else if(dog.curFood < dog.recFood * 0.9) {
        ownersDogTooLittle.push(...dog.owners);
    }
});

console.log(`${ownersDogTooMuch.join(" and ")}'s dogs eat too much`);
console.log(`${ownersDogTooLittle.join(" and ")}'s dogs eat too little`);

const dogsEatExact = dogs.some(dog => dog.curFood === dog.recFood);
const dogsEatEnough = dogs.some(dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1);

console.log("Dogs eat exact amount: ", dogsEatExact);
console.log("Dogs eat enough amount: ", dogsEatEnough);

const dogsEatEnoughArray = dogs.filter(dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1);
console.log("Dogs eat enough amount: ", dogsEatEnoughArray);

const sortedDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log("Sorted dogs by recommended food:", sortedDogs);
