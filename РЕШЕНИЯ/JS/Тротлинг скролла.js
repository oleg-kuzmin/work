//# Тротлинг скролла
/*
- Если вы подписались на scroll, то приготовьтесь получать большое количество событий. Событие будет приходить примерно на каждый кадр. Поэтому в обработчике не рекомендуется производить тяжёлых вычислений и модификации DOM. Это приведёт к потере кадров при отрисовке и ощущения, что сайт тормозит.

- Избежать большого количества событий scroll можно, используя технику под названием throttling. Её смысл состоит в том, чтобы принимать следующее событие только после истечения некоторого промежутка времени.
*/

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

// код будет срабатывать раз в 1 секунду
document.addEventListener(
  'scroll',
  throttle(function () {
    return console.log('Hey! It is', new Date().toUTCString());
  }, 1000)
);
