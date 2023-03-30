//# деструктуризация массива
const catProfile = ["Maru", "Scottish Fold", true, "https://youtu.be/ChignoxJHXc"];

//* В старом подходе, если из массива нужна пара значений, то их читают и сохраняют в переменные:
const catName = catProfile[0];
const catBreed = catProfile[1];

//* Новый подход делает то же самое, но короче:
const [name, breed] = catProfile;
console.log(breed); // Scottish Fold
