//# slice()
// Копия массива создаётся с помощью метода slice(). Нужно вызвать его без аргументов и сохранить результат в новую переменную:
const iWatched = ["GameOfThrones", "Breaking Bad"];
const vitalikWatched = iWatched.slice();

vitalikWatched.push("American Gods");
console.log(iWatched); // ['GameOfThrones', 'Breaking Bad']
console.log(vitalikWatched); // ['GameOfThrones', 'Breaking Bad', 'American Gods']
