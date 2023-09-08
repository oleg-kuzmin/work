//# Ресурсы
// Next.js может хранить статические ресурсы, например изображения, в каталоге верхнего уровня public. На файлы внутри public можно ссылаться из корня приложения, аналогично pages.

// Каталог public также полезен для robots.txt проверки сайта Google и любых других статических ресурсов. Чтобы узнать больше, ознакомьтесь с документацией по статическому обслуживанию файлов.

//# Загрузите изображение вашего профиля
/*
Сначала давайте получим изображение вашего профиля.
- Загрузите изображение профиля в .jpg формате
- Создайте каталог images внутри каталога public.
- Сохраните картинку как profile.jpg в каталоге public/images.
- Размер изображения может составлять около 400 на 400 пикселей.
- Вы можете удалить неиспользуемый файл логотипа SVG прямо из каталога public.
*/

//# Неоптимизированное изображение
// Используя обычный HTML, вы можете добавить изображение своего профиля следующим образом:

<img src="/images/profile.jpg" alt="Your Name" />;

/*
Однако это означает, что вам придется вручную обрабатывать:
- Обеспечение адаптивности вашего изображения на экранах разных размеров.
- Оптимизация изображений с помощью стороннего инструмента или библиотеки
- Загрузка изображений только тогда, когда они попадают в область просмотра

И более. Вместо этого Next.js предоставляет готовый компонент Image, который сделает это за вас.
*/

//# Компонент изображения и оптимизация изображения
// next/image — это расширение элемента HTML <img>, разработанное для современной сети.

// Next.js также по умолчанию поддерживает оптимизацию изображений. Это позволяет изменять размер, оптимизировать и отображать изображения в современных форматах, таких как WebP, если браузер поддерживает это. Это позволяет избежать отправки больших изображений на устройства с меньшим окном просмотра. Это также позволяет Next.js автоматически адаптировать будущие форматы изображений и предоставлять их браузерам, поддерживающим эти форматы.

// Автоматическая оптимизация изображения работает с любым источником изображения. Даже если изображение размещено во внешнем источнике данных, например в CMS, его все равно можно оптимизировать.

//# Использование компонента изображения
// Вместо оптимизации изображений во время сборки Next.js оптимизирует изображения по требованию, когда их запрашивают пользователи. В отличие от генераторов статических сайтов и статических решений, время сборки не увеличивается, независимо от того, отправляете ли вы 10 изображений или 10 миллионов изображений.

// По умолчанию изображения загружаются отложенно. Это означает, что скорость вашей страницы не снижается за изображения за пределами области просмотра. Изображения загружаются при прокрутке в окне просмотра.

// Изображения всегда визуализируются таким образом, чтобы избежать накопительного сдвига макета, основного веб-важного фактора, который Google собирается использовать при ранжировании в результатах поиска.

// Вот пример использования next/image для отображения изображения нашего профиля. Параметры height и width должны иметь желаемый размер рендеринга с соотношением сторон, идентичным исходному изображению.

// Примечание. Мы будем использовать этот компонент позже в «Полировке макета», копировать его пока не нужно.

import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

// Чтобы узнать больше об автоматической оптимизации изображений, ознакомьтесь с документацией.

// Чтобы узнать больше о компоненте Image, ознакомьтесь со справкой по API для next/image.
