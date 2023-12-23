//# audio (audio) (звук)
/*
- Встраивает аудиофайл на страницу
- Тег <audio> добавляет на страницу аудиоплеер, который может воспроизвести звуковой файл. Можно добавить несколько форматов одного файла, чтобы браузер воспроизвёл тот формат, который он поддерживает — для этого нужно добавить вложенные теги <source>.
- Тег <audio> всегда закрывается парным тегом </audio>.
- Внутри контейнера <audio> пишется текст, который появится, если браузер не поддерживает встроенное аудио.
- Если не указать атрибут controls, то браузер не будет показывать стандартные элементы управления аудиоплеером. Создать свои элементы управления можно с помощью JavaScript.
- Значение свойства display у тега <audio> по умолчанию inline, а значит внизу может появиться отступ, который зависит от высоты строки. Чтобы убрать этот отступ, напиши для плеера display: block.
- Используйте CSS-свойства, чтобы настроить общий внешний вид и расположение аудиоплеера. Например, border и border-radius, padding, margin и другие параметры. Отдельные элементы внутри плеера изменить не получится. К тому же, в разных браузерах они выглядят по-разному.
- С 2017 года практически все браузеры запретили автопроигрывание аудио.
*/

//# Пример
<figure>
  <figcaption>Привет, я Алиса</figcaption>
  <audio controls src="hi-alice.mp3">
    Ваш браузер не поддерживает встроенное аудио. Попробуйте скачать его
    <a href="hi-alice.mp3" download>
      по ссылке
    </a>
  </audio>
</figure>;
