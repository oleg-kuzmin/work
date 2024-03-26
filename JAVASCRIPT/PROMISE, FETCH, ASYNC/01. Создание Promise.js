//# Создание Promise
// Создание объекта promise - экземпляра класса Promise происходит через конструктор new Promise

//# Синтаксис
//* В качестве аргумента передается функция-исполнитель с двумя аргументами (callback)
let promise = new Promise(function (resolve, reject) {
  /**
   * Когда Promise создаётся, функция-исполнитель запускается автоматически.
   * Она должна содержать код, который когда-нибудь создаст результат.
   * Функция должна выполнить работу, а затем вызвать resolve или reject (что-то одно)
   * 1. resolve(value) — если работа завершилась успешно, с результатом value.
   * 2. reject(error) — если произошла ошибка, error – объект ошибки.
   * Вызывайте reject с объектом Error (например new Error("Whoops!").
   * Функции resolve/reject ожидают только один аргумент (или ни одного).
   */
  resolve(value) || reject(error);
});

// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства: state, result.

//# promise.state
// state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.

//# promise.result
// result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).
