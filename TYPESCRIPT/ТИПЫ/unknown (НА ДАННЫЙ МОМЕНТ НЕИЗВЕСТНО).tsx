//# unknown (НА ДАННЫЙ МОМЕНТ НЕИЗВЕСТНО)
/*
- Вместо any старайтесь использовать unknown, потому что язык будет ругаться на него, если почувствует что-то некорректное.
- Можно использовать только в случае дальнейшего уточнения.
*/

let xx: unknown = 2;
if (typeof xx === 'string') xx.toUpperCase();
