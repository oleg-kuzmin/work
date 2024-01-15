//# Функции-обертки для localStorage
function getItem(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (e) {
    console.log(e);
  }
}

function setItem(key, value) {
  try {
    return window.localStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
}

function setJSON(key, value) {
  try {
    const json = JSON.stringify(value);
    setItem(key, json);
  } catch (e) {
    console.error(e);
  }
}

function getJSON(key) {
  try {
    const json = getItem(key);
    return JSON.parse(json);
  } catch (e) {
    console.error(e);
  }
}
