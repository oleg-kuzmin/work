const todos = [
  {
    name: "shop",
    isCompleted: true,
  },
  {
    name: "clean",
    isCompleted: true,
  },
  {
    name: "byu",
    isCompleted: false,
  },
];

// Запись cookie
document.cookie = `todos=${JSON.stringify(todos)}`;

// Получение элемента cookie
function getCoockie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === "") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
console.log(JSON.parse(getCoockie("todos")));