//# never (НИКОГДА НЕ ЗАВЕРШИТСЯ)
// Говорит о том, что функция никогда не будет доведена до конца и никакой return не будет выполнен.

function crash(): never {
  throw new Error('ups');
}
