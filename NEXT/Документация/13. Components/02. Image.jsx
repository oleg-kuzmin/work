//# <Image>
// Этот справочник по API поможет вам понять, как использовать реквизиты и параметры конфигурации, доступные для компонента изображения.

//* app/page.js (добавить export default)
import Image from 'next/image';

function Page() {
  return <Image src="/profile.png" width={500} height={500} alt="Picture of the author" />;
}

//# Props
/* Вот краткий обзор реквизитов, доступных для компонента изображения:
Prop	            Example	                            Type	          Required
src	              src="/profile.png"	                String	        Yes
width	            width={500}	                        Integer (px)	  Yes
height	          height={500}	                      Integer (px)	  Yes
alt	              alt="Picture of the author"	        String	        Yes
loader	          loader={imageLoader}	              Function	      -
fill	            fill={true}	                        Boolean	        -
sizes	            sizes="(max-width: 768px) 100vw"	  String	        -
quality	          quality={80}	                      Integer (1-100)	-
priority	        priority={true}	                    Boolean	        -
placeholder	      placeholder="blur"	                String	        -
style	            style={{objectFit: "contain"}}	    Object	        -
onLoadingComplete	onLoadingComplete={img => done())}	Function	      -
onLoad	          onLoad={event => done())}	          Function	      -
onError	          onError(event => fail()}	          Function	      -
loading	          loading="lazy"	                    String	        -
blurDataURL	      blurDataURL="data:image/jpeg..."	  String	        -
*/

//# Обязательные props (добавить export default)
//* app/page.js (добавить export default)
import Image from 'next/image';

function Page() {
  return (
    <div>
      <Image src="/profile.png" width={500} height={500} alt="Picture of the author" />
    </div>
  );
}

//# src (Обязательные props)
/* Должно быть одно из следующих:
- Статически импортированный файл изображения.
- Строка пути. Это может быть либо абсолютный внешний URL-адрес, либо внутренний путь в зависимости от свойства loader.
*/

// При использовании внешнего URL-адреса его необходимо добавить в remotePatterns в файле next.config.js.

//# width (Обязательные props)
// Свойство width представляет визуализированную ширину в пикселях, поэтому оно влияет на размер изображения.
// Обязательно, за исключением статически импортированных изображений или изображений со свойством fill.

//# height (Обязательные props)
// Свойство height представляет визуализированную высоту в пикселях, поэтому оно влияет на размер изображения.
// Обязательно, за исключением статически импортированных изображений или изображений со свойством fill.

//# alt (Обязательные props)
// Свойство alt используется для описания изображения для программ чтения с экрана и поисковых систем. Это также резервный текст, если изображения отключены или при загрузке изображения возникает ошибка.

// Он должен содержать текст, который мог бы заменить изображение, не меняя смысла страницы. Оно не предназначено для дополнения изображения и не должно повторять информацию, уже представленную в подписях над или под изображением.

// Если изображение носит чисто декоративный характер или не предназначено для пользователя, свойство alt должно быть пустой строкой (alt="").

//# Опциональные props
// Компонент <Image /> принимает ряд дополнительных свойств помимо обязательных. В этом разделе описаны наиболее часто используемые свойства компонента Image.

//# loader (Опциональные props)
// Пользовательская функция, используемая для разрешения URL-адресов изображений.

/* loader — это функция, возвращающая строку URL-адреса изображения при следующих параметрах:
- src
- width
- quality
*/

// Вот пример использования пользовательского loader:

//* app/page.js (добавить export default)
('use client');

import Image from 'next/image';

const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

function Page() {
  return <Image loader={imageLoader} src="me.png" alt="Picture of the author" width={500} height={500} />;
}

// Полезно знать: использование таких props, как loader, которые принимают функцию, требует использования клиентских компонентов для реализации предоставленной функции.

// Альтернативно вы можете использовать конфигурацию loaderFile в next.config.js для настройки каждого экземпляра next/image в вашем приложении без передачи реквизита.

//# fill
// fill={true} // {true} | {false}

// Логическое значение, которое заставляет изображение заполнять родительский элемент, что полезно, когда ширина и высота неизвестны.

// Родительскому элементу необходимо присвоить position: "relative", position: "fixed" или position: "absolute".

// По умолчанию элементу img автоматически будет присвоен position: "absolute".

// Если к изображению не применены стили, оно растянется по размеру контейнера. Вы можете предпочесть установить object-fit: "contain" для изображения, которое имеет почтовый ящик, чтобы соответствовать контейнеру и сохранять соотношение сторон.

// Альтернативно, object-fit: «cover» приведет к тому, что изображение заполнит весь контейнер и будет обрезано, чтобы сохранить соотношение сторон. Чтобы это выглядело правильно, родительскому элементу должен быть присвоен стиль overflow: "hidden".
