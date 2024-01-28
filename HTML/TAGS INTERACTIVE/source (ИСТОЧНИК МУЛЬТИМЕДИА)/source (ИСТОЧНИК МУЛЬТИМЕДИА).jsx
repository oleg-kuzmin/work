//# source (ИСТОЧНИК МУЛЬТИМЕДИА)
/*
- При помощи тега <source> можно указать несколько источников для видео (<video>), аудио (<audio>) или изображения (<picture>). Очень пригождается, когда нужно подключить контент в нескольких форматах для лучшей поддержки в разных браузерах.
- Когда мы хотим вставить на страницу аудио- или видеофайл, то используем теги <audio> и <video>. Если у нас есть несколько одинаковых файлов разного формата (например, один и тот же видеоролик в форматах .mp4 и .webm), то можно использовать тег <source>. Он поможет определить, какие форматы поддерживает браузер, и загрузить медиафайл в нужном формате.
- С адаптивными изображениями чуть сложнее. Тег <source> используется совместно с тегами <picture> и <img>, чтобы определить, какое изображение должен загрузить браузер при разных условиях.
*/

//# Пример
//* <video> разные форматы
<video controls width="250" height="200" muted>
  <source src="kino.mp4" type="video/mp4" />
  <source src="kino.webm" type="video/webm" />
  <source src="kino.ogg" type="video/ogg" />
  <source src="kino.mov" type="video/quicktime" />
</video>;

//* <audio> разные форматы
<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
  <source src="song.ogg" type="audio/ogg" />
</audio>;

//* <picture> разные форматы
<picture>
  <source type="image/avif" srcset="photo.avif" />
  <source type="image/webp" srcset="photo.webp" />
  <source type="image/jpeg" srcset="photo.jpg" />
  <img src="photo.jpg" alt="Тестовая картинка" />
</picture>;

//* <picture> медиа-запрос
<picture>
  <source srcset="big.jpg" media="(min-width: 600px)" />
  <img src="small.jpg" alt="Абстрактное изображение" />
</picture>;
