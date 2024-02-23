/*
Набор из букв (латиница + кириллица), а также пробелов и дефисов
^([а-яА-ЯёЁa-zA-Z]|\s|-)+$

/*
Номер кредитки:
[0-9]{13,16}

ICQ:
([1-9])+(?:-?\d){4,}

Набор из букв и цифр (латиница):
^[a-zA-Z0-9]+$

Набор из букв и цифр (латиница + кириллица):
^[а-яА-ЯёЁa-zA-Z0-9]+$

Домен (например abcd.com):
^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$

IPv4: (подкорректировано runcore)
((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)

IPv6:
((^|:)([0-9a-fA-F]{0,4})){1,8}$

Имя пользователя (с ограничением 2-20 символов, которыми могут быть буквы и цифры, первый символ обязательно буква):
^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$

Пароль (Строчные и прописные латинские буквы, цифры):
^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$

Пароль (Строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов):
(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$

Дата в формате YYYY-MM-DD:
[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])

UPD. Более строгая проверка, предложенная runcore:
(19|20)\d\d-((0[1-9]|1[012])-(0[1-9]|[12]\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)

Дата в формате DD/MM/YYYY:
(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d

Целые числа и числа с плавающей точкой (разделитель точка):
\-?\d+(\.\d{0,})?

UUID:
^[0-9A-Fa-f]{8}\-[0-9A-Fa-f]{4}\-[0-9A-Fa-f]{4}\-[0-9A-Fa-f]{4}\-[0-9A-Fa-f]{12}$

Широта или долгота:
-?\d{1,3}\.\d+

UPD. E-mail (от kvf77):
^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$

UPD. URL на латинице. Если нужно распознавать и кириллические домены, необходимо изменить все «a-z0-9» на «а-яёa-z0-9» и добавить в список доменных зон «рф» (от kvf77):
~^(?:(?:https?|ftp|telnet)://(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:ru|su|com|net|org|mil|edu|arpa|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:/[a-z0-9.,_@%&?+=\~/-]*)?(?:#[^ '\"&]*)?$~i

UPD. Время в формате HH:MM:SS (от runcore):
^([0-1]\d|2[0-3])(:[0-5]\d){2}$

UPD. Mac-адрес (от tiahin):
([0-9a-fA-F]{2}([:-]|$)){6}$|([0-9a-fA-F]{4}([.]|$)){3}
*/
