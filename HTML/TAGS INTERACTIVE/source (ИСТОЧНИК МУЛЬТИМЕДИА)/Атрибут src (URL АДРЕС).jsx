//# Атрибут src (URL АДРЕС)
// Требуется только для использования внутри тегов <audio> и <video>. В атрибуте указывается путь до медиафайла. Если тег <source> находится внутри <picture>, то атрибут src игнорируется.

//# Пример
<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
  <source src="song.ogg" type="audio/ogg" />
</audio>;

//# Пример source
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  <p>
    Ваш браузер не поддерживает встроенное аудио. Попробуйте
    <a href="audio.mp3" download>
      скачать
    </a>
    файл.
  </p>
</audio>;

//# Пример source
// Мы также добавили несколько форматов одного аудиофайла. Если браузер не поддерживает формат Opus, он попробует воспроизвести OGG. Если и с ним не получится, то воспроизведёт файл в MP3. Атрибут type поможет браузеру быстрее определить формат файла.
<audio controls>
  <source src="audio.opus" type="audio/ogg; codecs=opus" />
  <source src="audio.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="audio.mp3" type="audio/mpeg" />
  Ваш браузер не поддерживает встроенные аудио. Попробуйте
  <a href="audio.mp3" download>
    скачать
  </a>
  файл.
</audio>;