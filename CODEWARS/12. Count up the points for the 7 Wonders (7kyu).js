//# Count up the points for the 7 Wonders (7kyu)
/*
7 Wonders — это настольная игра, в которой вы строите свой город, собираете ресурсы и сражаетесь с соседями.

Одна часть игры также заключается в том, чтобы исследовать науку, чтобы набирать очки в конце игры.
Есть 3 типа научных глифов, которые вы можете собрать:

Compasses (Компасы)
Gears (Шестерни)
Tablets (Таблетки)

Способ суммирования точек работает, как описано здесь:

Step 1
Каждый отдельный набор из трех разных глифов приносит 7 очков.
1 Compass, 1 Gear and 1 Tablet is 7 points.
2 Compasses, 1 Gear and 1 Tablet is still 7 points.

Обратите внимание, что отдельный набор из трех разных глифов означает 1 компас, 1 механизм и 1 табличку. Не больше, не меньше!

Step 2
Количество каждого глифа, которым вы владеете, возводится в квадрат, а затем суммируется.
1 Compass, 1 Gear and 1 Tablet is 3 points.
2 Compasses, 1 Gear and 1 Tablet is 6 points.

Finally
Общее количество очков науки равно сумме двух шагов.

1 Compass, 1 Gear and 1 Tablet is finally 10 points.
2 Compasses, 1 Gear and 1 Tablet is finally 13 points.

Вам будет предоставлено 3 input, соответствующих количеству каждого глифа, который вы приобрели в игре. Ваша задача вывести окончательный результат. Учтите, что у вас может вообще не быть глифов!
*/

//* мое решение
function solve(compasses, gears, tablets) {
  let stepOne = 0;
  const stepTwo = compasses ** 2 + gears ** 2 + tablets ** 2;
  while (compasses > 0 && gears > 0 && tablets > 0) {
    stepOne += 7;
    compasses--;
    gears--;
    tablets--;
  }
  const result = stepOne + stepTwo;
  return result;
}

//* лучшее
function solve(compasses, gears, tablets) {
  return Math.min(compasses, gears, tablets) * 7 + compasses ** 2 + gears ** 2 + tablets ** 2;
}

function solve(...array) {
  return Math.min(...array) * 7 + array.reduce((acc, curr) => acc + curr ** 2, 0);
}
