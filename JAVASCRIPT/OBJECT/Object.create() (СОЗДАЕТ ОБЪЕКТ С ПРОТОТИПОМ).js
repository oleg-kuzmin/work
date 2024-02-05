//# Object.create() (СОЗДАЕТ ОБЪЕКТ С ПРОТОТИПОМ)
// Создает объект, добавляя в его __proto__, переданные методы объекта.

//# Синтаксис
//* Объект, который должен стать прототипом нового объекта
Object.create(objectPototype);

//# Возвращает
//* Созданный объект.

//# Пример
//* Создаем прототип
const objectPototype = {
  like: function () {
    this.isLiked = !this.isLiked;
  },
};

//* Создаем новый пустой объект с указанным прототипом
const newSong = Object.create(songPrototype);
