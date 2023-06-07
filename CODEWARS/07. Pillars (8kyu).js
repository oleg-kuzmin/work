//# Pillars (8kyu)
/*
Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина столбов одинаковая. Ваша функция принимает три аргумента:

количество столбов (≥ 1);
расстояние между столбами (10 – 30 метров);
ширина столба (10 – 50 сантиметров).
Рассчитайте расстояние между первым и последним столбом в сантиметрах (без ширины первого и последнего столба).
*/

//* мое решение
function pillars(numPill, dist, width) {
  if (numPill === 1) {
    return 0;
  }

  if (numPill === 2) {
    return dist * 100;
  }

  if (numPill > 2) {
    let res = dist * (numPill - 1) * 100;
    res = res + width * (numPill - 2);
    return res;
  }
}

//* лучшее на сайте
function pillars(num_pill, dist, width) {
  return num_pill > 1 ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width : 0;
}
