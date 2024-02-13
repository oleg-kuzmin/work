//# Функции
//* параметр - примитив
const fn1 = (num: number): string => {
  return String(num);
};

// (num: number) - тип параметра, который принимает функция
// : string - тип, который возвращает функция

//* параметр - callback
const fn2 = (sb: () => string): string => {
  return sb();
};

//* параметр - callback
type Callback = () => string;
const fn3 = (sb: Callback): string => {
  return sb();
};

//* необязательный параметр
type Callback4 = (num: number) => string;

const fn4 = (sb?: Callback4): string => {
  if (sb === undefined) {
    sb = String;
  }
  return sb(12);
};

//* параметры по умолчанию
function createPoint(x = 0, y = 0): [number, number] {
  return [x, y];
}
createPoint(10);

//* rest-параметры
function fn5(...nums: number[]): string {
  return nums.join('-');
}
