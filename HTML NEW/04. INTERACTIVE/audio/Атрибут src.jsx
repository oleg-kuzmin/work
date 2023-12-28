//# Атрибут src
// URL-адрес звукового файла задаётся с помощью атрибута src или тега <source>, который помещается внутри <audio>. Тег <source> позволяет добавить несколько форматов одного и того же файла на случай, если какой-то из них не будет поддерживаться браузером:

//# Пример src
<figure>
  <figcaption>Привет, я Алиса</figcaption>
  <audio controls src="hi-alice.mp3">
    Ваш браузер не поддерживает встроенное аудио. Попробуйте скачать его
    <a href="hi-alice.mp3" download>
      по ссылке
    </a>
  </audio>
</figure>;

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
