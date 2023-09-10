//# Структура проекта Next.js
// На этой странице представлен обзор структуры файлов и папок проекта Next.js. Он охватывает файлы и папки верхнего уровня, файлы конфигурации и соглашения о маршрутизации в каталогах app и pages.

//# Папки верхнего уровня
/*
app	    App Router
pages	  Pages Router
public	Static assets to be served (Статические объекты, которые будут обслуживаться)
src	    Optional application source folder (Опциональная папка ресурсов приложения)
*/

//# Файлы верхнего уровня
/*
next.config.js	    Configuration file for Next.js
package.json	      Project dependencies and scripts
instrumentation.ts	OpenTelemetry and Instrumentation file
middleware.ts	      Next.js request middleware
.env	              Environment variables
.env.local	        Local environment variables
.env.production	    Production environment variables
.env.development	  Development environment variables
.eslintrc.json	    Configuration file for ESLint
.gitignore	        Git files and folders to ignore
next-env.d.ts	      TypeScript declaration file for Next.js
tsconfig.json	      Configuration file for TypeScript
jsconfig.json	      Configuration file for JavaScript
postcss.config.js	  Configuration file for Tailwind CSS
*/

//# Маршрутизация App Router (папка app)
//* Файлы
/*
layout	      .js .jsx .tsx	 Layout
page	        .js .jsx .tsx	 Page
loading	      .js .jsx .tsx	 Loading UI
not-found	    .js .jsx .tsx	 Not found UI
error	        .js .jsx .tsx	 Error UI
global-error	.js .jsx .tsx	 Global error UI
route	        .js .ts	       API endpoint
template	    .js .jsx .tsx	 Re-rendered layout
default	      .js .jsx .tsx	 Parallel route fallback page
*/

//* Вложенные маршруты
/*
folder	      Route segment (Участок маршрута)
folder/folder	Nested route segment (Вложенный сегмент маршрута)
*/

//* Динамические маршруты
/*
[folder]	    Dynamic route segment (Динамический сегмент маршрута)
[...folder]	  Catch-all route segment (Универсальный сегмент маршрута)
[[...folder]]	Optional catch-all route segment (Дополнительный комплексный сегмент маршрута)
*/

//* Группы маршрутов и личные папки
/*
(folder)	    Group routes without affecting routing (Группировка маршрутов без маршрутизации, игнорируются пути)
_folder	      Opt folder and all child segments out of routing (Папка и все дочерние сегменты исключены из маршрутизации)
*/

//* Параллельные и перехватываемые маршруты
/*
@folder	        Named slot (Именованный слот)
(.)folder	      Intercept same level (Перехват на том же уровне)
(..)folder	    Intercept one level above (Перехват на один уровень выше)
(..)(..)folder	Intercept two levels above (Перехват двумя уровнями выше)
(...)folder	    Intercept from root (Перехват от корня)
*/

//# Соглашения о файлах метаданных
//* App Icons
/*
favicon	    .ico	                     Favicon file (Фавикон-файл)
icon	      .ico .jpg .jpeg .png .svg	 App Icon file (Файл значка приложения)
icon	      .js .ts .tsx	             Generated App Icon (Сгенерированный значок приложения)
apple-icon	.jpg .jpeg,.png	           Apple App Icon file (Файл значка приложения Apple)
apple-icon	.js .ts .tsx	             Generated Apple App Icon (Сгенерированный значок приложения Apple)
*/

//* Open Graph and Twitter Images
/*
opengraph-image	.jpg .jpeg .png .gif	 Open Graph image file (Файл изображения Open Graph)
opengraph-image	.js .ts .tsx	         Generated Open Graph image (Сгенерированный файл изображения Open Graph)
twitter-image	  .jpg .jpeg .png .gif	 Twitter image file (Файл изображения Твиттера)
twitter-image	  .js .ts .tsx	         Generated Twitter image (Сгенерированный файл изображения Твиттера)
*/

//* SEO
/*
sitemap	        .xml	                 Sitemap file (Файл карты сайта)
sitemap	        .js .ts	               Generated Sitemap (Сгенерированный файл карты сайта)
robots	        .txt	                 Robots file (Файл роботов)
robots	        .js .ts	               Generated Robots file (Сгенерированный Файл роботов)
*/
