//# Создание interface
// Для предотвращения пересечения и объединения интерфейсов с какой-либо библиотекой существует соглашение добавлять букву I перед объявлением интерфейса, например interface IAccount {}

//# Пример
interface Car {
  // обязательные поля
  wheels: number;
  brand: string;

  // необязательные поля
  type?: string;
  isNew?: boolean;

  // неограниченное количество полей
  [key: string]: unknown;

  // методы
  print(): number;
  print1?: () => number;

  // только для чтения
  readonly parametr: string;
}
