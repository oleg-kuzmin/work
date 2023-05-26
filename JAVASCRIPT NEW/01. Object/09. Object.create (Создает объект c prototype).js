//# Object.create (Создает объект c prototype)
// Первый аргумент метода — обязательный — объект, который должен стать прототипом нового объекта.

//# пример
// это будет прототип объекта-песни
const songPrototype = {
  like: function () {
    this.isLiked = !this.isLiked;
  },
};

const newSong = Object.create(songPrototype); // создаём пустой объект с указанным прототипом
console.log(newSong); // пустой объект
