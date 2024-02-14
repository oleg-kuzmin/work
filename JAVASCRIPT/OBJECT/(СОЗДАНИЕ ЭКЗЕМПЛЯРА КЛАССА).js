//# (СОЗДАНИЕ ЭКЗЕМПЛЯРА КЛАССА)
//* класс Song
class Song {
  constructor(name, artist) {
    this.name = name;
    this.artist = artist;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }
}

//* экземпляр класса Song
const song = new Song('Start Over', 'Any Given Day');
// constructor(name, artist)

// Во время создания экземпляра в скобках вы можете передать классу любые аргументы. Все эти аргументы передаются прямо в конструктор, где вы можете их обработать.
