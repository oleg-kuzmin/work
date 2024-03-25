//# Обработка Promise - catch
// Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента: .then(null, errorHandlingFunction). Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает то же самое.

//# Синтаксис
promise.catch(function (error) {
  /**
   * обработает ошибку
   * .catch(function) это то же самое, что promise.then(null, f)
   */
});

//* function (error)
