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
