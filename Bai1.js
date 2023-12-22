const cats = [1, 2, 3, 4, 5, 6, 7, 8];
const owners = cats.map(age => (age <= 2 ? age * 2 : age * 4 + 16));
const adults = owners.filter(age => age >= 18);
const avg = adults.reduce((preval, age) => preval + age, 0) / adults.length;

console.log("Tuoi cua chu nhan: ", owners);
console.log("Tuoi cua nguoi lon: ", adults);
console.log("Tuoi trung binh cua nguoi lon: ", avg);
