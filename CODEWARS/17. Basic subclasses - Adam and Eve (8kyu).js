//# Basic subclasses - Adam and Eve (8kyu)
/*
Согласно мифам о творении авраамических религий, Адам и Ева были первыми людьми, странствовавшими по Земле.

Вы должны выполнять Божью работу. Метод создания должен возвращать массив длиной 2, содержащий объекты (представляющие Адама и Еву). Первый объект массива должен быть экземпляром класса Man. Второй должен быть экземпляром класса Woman. Оба объекта должны быть подклассами Human. Ваша задача — реализовать классы Human, Man и Woman.
*/

//* мое решение
class Human {
  render() {
    return {};
  }
}

class Man extends Human {
  render() {
    return {};
  }
}

class Woman extends Human {
  render() {
    return {};
  }
}

class God {
  static create() {
    return [new Man(), new Woman()];
  }
}

//* лучшее на сайте
class God {
  static create() {
    return [new Man(), new Woman()];
  }
}
class Human {}
class Man extends Human {}
class Woman extends Human {}
