//# Stone Pickaxe Crafting (7kyu)
/*
Примечание. Основано на Minecraft. Надеемся, вы хотя бы знаете эту игру!

Сюжет: Вы хотите создать гигантскую шахту, но вы немного скупы на железо и алмазы и не станете добывать весь камень железными или алмазными кирками. Вместо этого вы полагаетесь на менее прочные, но более дешевые каменные кирки! Однако вам понадобится много каменных кирок, поскольку они ломаются быстрее, чем алмазные или железные, поэтому вам нужно выяснить, сколько каменных кирок вы можете изготовить, прежде чем у вас закончатся палки и булыжники. К сожалению, вы неорганизованный человек и оставляете все свои материалы в одном сундуке со случайным хламом, который нужно фильтровать.

Задача: Учитывая массив, верните максимальное количество каменных кирок, которое вы можете изготовить, прежде чем у вас закончатся палки и булыжники. Внутри массива будет ряд строк с точными названиями материалов, перечисленных ниже. Если в массиве есть хотя бы 3 «Булыжника» и 2 «Палки», вы можете изготовить уникальную каменную кирку. Не считайте никакие материалы, кроме «Булыжников», «Палок» и «Дерева». Дерево можно превратить в 4 палки!

Вот материалы, которые вы ожидаете увидеть в массиве:

Sticks (Палки)
Cobblestone (Булыжники)
Stone (Камень) (Они отличаются от булыжника и не могут быть использованы для изготовления каменной кирки)
Wool (Шерсть)
Dirt (Грунт)
Wood (Дерево) (Можно рассматривать как палки, обычно 4 палки на 1 древесину.)
Diamond (Алмазы)

Размеры массива рандомизированы и варьируются от 1 до 200 со случайным содержимым.

Array: ["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"]
Returned: 1

Array: ["Wood", "Cobblestone", "Cobblestone", "Cobblestone"]
Returned: 1

Array: []
Returned: 0

Array: ["Sticks", "Wool", "Cobblestone"]
Returned: 0
*/

//* мое решение
function stonePick(arr) {
  let sticks = 0;
  let cobblestone = 0;

  arr.forEach(element => {
    switch (element) {
      case 'Wood':
        sticks += 4;
        break;
      case 'Sticks':
        sticks += 1;
        break;
      case 'Cobblestone':
        cobblestone += 1;
        break;
      default:
        break;
    }
  });

  return Math.min(Math.floor(sticks / 2), Math.floor(cobblestone / 3));
}

//* Лучшее на сайте (не согласен - 3 прохода по массиву)
function stonePick(arr) {
  return Math.min(
    Math.floor(arr.filter(e => e == 'Cobblestone').length / 3),
    Math.floor(arr.filter(e => e == 'Sticks').length / 2) + Math.floor((arr.filter(e => e == 'Wood').length * 4) / 2)
  );
}

console.log(stonePick(['Sticks', 'Sticks', 'Cobblestone', 'Cobblestone', 'Cobblestone'])); // 1
console.log(stonePick(['Wood', 'Cobblestone', 'Cobblestone', 'Cobblestone'])); // 1
console.log(stonePick([])); // 0
console.log(stonePick(['Sticks', 'Wool', 'Cobblestone'])); // 0
