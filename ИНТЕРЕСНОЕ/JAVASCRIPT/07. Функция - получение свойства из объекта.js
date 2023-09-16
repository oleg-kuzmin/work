function getProperty(obj, path) {
  return path.split('.').reduce(function (res, key) {
    if (res === undefined || res === null) {
      console.log('Такого свойства нет');
      return undefined;
    }
    return res[key];
  }, obj);
}

const object = {
  one: 1,
  two: {
    three: 3,
  },
  four: 4,
};

console.log(getProperty(object, 'one')); // 1
console.log(getProperty(object, 'two.three')); // 3
