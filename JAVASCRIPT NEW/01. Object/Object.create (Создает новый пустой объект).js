//# Object.create (Создает новый пустой объект)

// Первый аргумент метода — обязательный — объект, который должен стать прототипом нового объекта.

//# пример
// это будет прототип объекта-песни
const songPrototype = {
  like: function () {
    this.isLiked = !this.isLiked;
  },
};

// создаём пустой объект с указанным прототипом
const newSong = Object.create(songPrototype);

console.log(newSong); // пустой объект


