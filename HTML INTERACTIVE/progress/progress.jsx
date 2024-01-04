//# progress
/*
- Тег <progress> создаёт индикатор выполнения задачи. Обычно выглядит как прогресс-бар.
- В тег по умолчанию встроена роль progressbar, которая делает загрузку «живой» областью. Это область страницы, об изменениях в которой пользователи скринридеров узнают автоматически, без перехода к ней.

- Тег <progress> стоит использовать для вывода информации о процессе, который выполняется и должен завершиться. Например:
1. сообщить о количестве свободного места на диске;
2. вывести допустимые пределы громкости;
3. показать уровень загруженности интернет-канала;
4. прогресс загрузки файла;
5. процесс соединения абонентов.
*/

//# Пример
//* Прогресс-бар с известным максимальным значением:
<label for="progress">Загрузка файла</label>;
<progress id="progress" value="0" max="100"></progress>;

//* Задача выполняется, но неизвестно, сколько займёт времени. В примере связываем прогресс-бар с фидом, где обновляется содержимое, при помощи атрибута aria-describedby.
<div role="feed" aria-busy="true" aria-describedby="progress">
  {/* Содержимое, которое сейчас обновляется */}
</div>;
<progress id="progress" aria-label="Фид обновляется"></progress>;




/*
<!--# progress (Програсс-бар процесса) -->
<!-- Тег <progress> создаёт индикатор выполнения задачи. Обычно выглядит как прогресс-бар. -->

<!--# пример -->
<p>Подождите, пожалуйста, файл загружается</p>
<progress value="30" max="100"></progress>

<!--# общая информация
- Тег <progress> стоит использовать для вывода информации о процессе, который выполняется и должен завершиться: прогресс загрузки файла, процесс соединения абонентов, длительность таймера.
- Если пользователю надо показать числовое значение в заданном диапазоне, лучше использовать тег <meter>. -->

<!--# max
- Максимальное значение. Должно быть положительным, допускаются дробные значения. По умолчанию равно 1. -->

<!--# value
- Текущее значение. Положительное число, допускаются дробные значения. Должно находится в пределах между 0 и значением атрибута max. Также его можно менять при помощи JavaScript. Если атрибут не прописан, то линия внутри прогресс-бара будет перемещаться от одного края к другому, показывая, что задача выполняется, но не известно, сколько это займёт времени. -->
*/
