//# Record (Создает тип объекта с ключами и значениями)
// Создает тип объекта, ключами свойств которого являются Keys, а значениями свойств — Type. Эту утилиту можно использовать для сопоставления свойств одного типа с другим типом.

//# Синтаксис: Record<Keys, Type>
//* Keys - ключи свойств
//* Type - значения свойств

//# Пример
// Keys
interface CatInfo {
  age: number;
  breed: string;
}
// Type
type CatName = 'miffy' | 'boris' | 'mordred';

// Record<Keys, Type>
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

cats.boris; // { age: 5, breed: 'Maine Coon' }
