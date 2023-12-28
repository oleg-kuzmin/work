//# Атрибут referrerpolicy
/*
- Атрибут referrerpolicy определяет, какие реферальные данные следует отправлять при переходе по ссылке в заголовке Referer.
- Заголовок Referer в HTTP-запросе содержит адрес страницы, с которой был выполнен переход на текущий адрес. Например, если пользователь перешел со страницы https://webref.ru на другой сайт, то в запросе будет следующий заголовок: https://webref.ru

Заголовок Referer может применяться для следующих задач:
1. аналитика, откуда на сайт приходят пользователи;
2. определение популярных веб-страниц для входа;
3. сбор статистики по переходам между страницами сайта;
4. проверка, что запрос пришел с того же сайта;
5. ограничение доступа к содержимому с определённых адресов.

- Вместе с тем, не всегда полный адрес следует передавать на другие ресурсы в целях безопасности. К примеру, в адресе может содержаться информация об имени пользователя, электронной почте, пароле и другие конфиденциальные данные. Такие данные могут оказаться в адресе при заполнении формы.
- Таким образом, атрибут referrerpolicy определяет политику, какие данные включать в заголовок Referer: никакие, ограниченные или все.
*/

//# Пример
<>
  <map name="doka">
    <area shape="rect" coords="47,4,319,64" href="/html/" target="_blank" alt="HTML" referrerpolicy="strict-origin-when-cross-origin" />
    <area shape="rect" coords="46,69,318,129" href="/css/" target="_blank" alt="CSS" />
    <area shape="rect" coords="46,133,318,193" href="/js/" target="_blank" alt="JS" />
  </map>
  <img usemap="#doka" />
</>;

//# Значения
//* referrerpolicy="strict-origin-when-cross-origin"
// Передаёт полный путь в рамках одного сайта, на другой сайт передаётся протокол, адрес сайта и порт, но только когда протокол остаётся прежним (HTTPS → HTTPS). Заголовок не передаётся при переходе на менее безопасный протокол (HTTPS→HTTP).

//* referrerpolicy="no-referrer"
// Заголовок Referer не отправляется.

//* referrerpolicy="no-referrer-when-downgrade"
// Заголовок Referer не отправляется при переходе с защищённого протокола на обычный (HTTPS→HTTP).

//* referrerpolicy="same-origin"
// Реферальные данные отправляются в пределах одного сайта, при переходе на другой сайт данные не передаются.

//* referrerpolicy="origin"
// Реферальные данные ограничены и включают только протокол, адрес сайта и порт, если он указан (https://example.com:80).

//* referrerpolicy="strict-origin"
// Реферальные данные включают протокол, адрес сайта и порт (при его наличии). Сами данные передаются только в рамках одного и того же протокола (HTTPS→HTTPS) и не отправляются при переходе на менее безопасный (HTTPS→HTTP).

//* referrerpolicy="origin-when-cross-origin"
// В рамках одного сайта передаётся полный путь. При переходе на другой сайт реферальные данные ограничены и включают только протокол, адрес сайта и порт.

//* referrerpolicy="unsafe-url"
// Реферальные данные включают полный адрес документа. Это значение считается небезопасным.
