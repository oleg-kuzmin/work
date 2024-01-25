//# Object.create() (СОЗДАЕТ ОБЪЕКТ С ПРОТОТИПОМ)
// Создает объект, добавляя в его prototype, переданные методы объекта.

//# Синтаксис
//* Объект, который должен стать прототипом нового объекта
Object.create(objectPototype);

//# Возвращает
//* Итоговый объект.

//# Пример
//* Создаем прототип
const objectPototype = {
  like: function () {
    this.isLiked = !this.isLiked;
  },
};

//* Создаем новый пустой объект с указанным прототипом
const newSong = Object.create(songPrototype);
