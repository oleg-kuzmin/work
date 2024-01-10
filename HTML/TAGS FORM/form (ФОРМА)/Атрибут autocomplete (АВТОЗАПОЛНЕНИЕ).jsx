//# Атрибут autocomplete (АВТОЗАПОЛНЕНИЕ)
// Включает или выключает автозаполнение для формы. Браузер может подставить данные, которые пользователь сохранил ранее, например, пароль, номер банковской карты или адрес. Если у пользователя в настройках браузера отключена функция автозаполнения, то этот атрибут уже ни на что не повлияет. Атрибут autocomplete можно задать и для конкретных элементов.

//# Пример
<form autocomplete="on"></form>;

//# Значения
//* autocomplete="on" (по умолчанию)
// Включает автозаполнение для этой формы.

//* autocomplete="off"
// Выключает автозаполнение.

//* autocomplete="name"
// Автозаполнение конкретным значением.

//# autocomplete="name"
//* Авторизация
// nickname — никнейм.
// username — имя пользователя или название аккаунта.
// email — адрес электронной почты.
// current-password — текущий пароль пользователя.
// new-password — новый пароль.
// one-time-code — одноразовый код для верификации пользователя.

//* Формы имени
// name — полное имя.
// given-name — имя (в странах, где дают два имени, это первое имя).
// additional-name — второе имя (для стран, где дают два имени).
// family-name — фамилия.
// honorific-prefix — звание или префикс для обращения, например, «Mrs.», «Mr.», «Miss», «Ms.», «Dr.», «Mlle.».
// honorific-suffix — окончание имени, например, «Jr.», «B.Sc.», «PhD.», «IV», «мл.».

//* Данные банковской карты и деньги
// cc-given-name — имя (в странах, где дают два имени, это первое имя), как на банковской карте.
// cc-additional-name — второе имя, как на банковской карте (для стран, где дают два имени).
// cc-family-name — фамилия, как на банковской карте.
// cc-name — полное имя в том виде, как оно указано на банковской карте.
// cc-csc — код безопасности (три цифры на обороте карты).
// cc-exp — месяц и год окончания срока действия карты.
// cc-exp-month — месяц окончания срока действия карты.
// cc-exp-year — год окончания срока действия карты.
// cc-number — номер банковской карты или счёта.
// cc-type — платёжная система.
// transaction-amount — сумма перевода.
// transaction-currency — валюта перевода.

//* Личные данные
// bday — полная дата рождения.
// bday-day — день рождения (число).
// bday-month — месяц рождения.
// bday-year — год рождения.
// language — язык в формате языкового тега из списка BCP 47.
// sex — пол или гендер.
// organization — название организации.
// organization-title — профессия или должность в организации.
// photo - url-адрес изображения.

//* Адрес
// address-level1 — административная единица первого уровня. Обычно это название области, региона или штата.
// address-level2 — административная единица второго уровня. В странах с двумя уровнями это чаще всего название населённого пункта.
// address-level3 — административная единица третьего уровня.
// address-level4 — административная единица четвёртого уровня, если адрес её содержит.
// address-line1, address-line2, address-line3 — отдельные строки для адресов, которые используются, если нет поля со значением street-address.
// country — код страны.
// country-name — страна.
// street-address — адрес, начиная с улицы. Не должен содержать название города, страны и индекс.
// postal-code — почтовый индекс.

//* Телефон
// tel — полный номер телефона, включая код страны.
// tel-area-code — телефонный код региона страны.
// tel-country-code — телефонный код страны.
// tel-extension — добавочный номер.
// tel-local — номер телефона без кодов страны и региона.
// tel-local-prefix — номер локальной АТС.
// tel-local-suffix — номер абонента внутри сети АТС.
// tel-national — номер телефона без кода страны.

//* Ссылки
// impp — адрес сервера для мессенджера, например, xmpp:username@example.net.
// url — адрес сайта.
