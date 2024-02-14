//# (СОЗДАНИЕ КЛАССА)

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
