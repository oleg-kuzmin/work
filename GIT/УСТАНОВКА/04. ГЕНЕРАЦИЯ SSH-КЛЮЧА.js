//# ГЕНЕРАЦИЯ SSH-КЛЮЧА

// 1. Сгенерируйте в терминале приватный и публичный ключи
//* ssh-keygen -t ed25519 -C "info@oleg-kuzmin.ru"

/*
- У публичного расширение .pub, у приватного расширения нет.
- Оба ключа хранятся на вашем компьютере.
- Публичный нужен для привязки к «Гиту».
- Если у вас появилось сообщение об ошибке, скорее всего ваша система не поддерживает алгоритм шифрования ed25519.
- В таком случае достаточно воспользоваться другим алгоритмом.
ssh-keygen -t rsa -b 4096 -C "info@oleg-kuzmin.ru"
- После ввода отобразится сообщение: > Generating public/private rsa key pair.
*/

// 2. Укажите место хранения ключей
//* > Enter a file in which to save the key (C:\Users\Alex\.ssh\):[Press enter]
// Простой вариант — сделать домашний каталог пользователя путём по умолчанию. Для этого нажмите Enter.

// 3. Создайте пароль доступа к SSH-ключу
//* > Enter passphrase (empty for no passphrase): [Type a passphrase]
//* > Enter same passphrase again: [Type passphrase again]
// Вы можете оставить поле пустым, чтобы никогда не вводить пароль. Для этого нажмите Enter.

// 4. Запустите фоном команду ssh-agent. Она ищет SSH-ключ на вашем компьютере
//* eval $(ssh-agent -s)

// 5. Привяжите приватный ключ к ssh-agent
//* ssh-add ~/.ssh/id_ed25519     (для ed25519)
//* ssh-add ~/.ssh/id_rsa         (для rsa)

// Тогда вы сможете не вводить пароль при каждой работе с репозиторием. К агенту нужно привязывать именно приватный ключ — это файл без расширения .pub
