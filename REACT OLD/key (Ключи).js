//# key (Ключи)
// В качестве ключей обычно указывают уникальный id объекта
texts.map((text, index) => {
  return <Button text={text} key={index} />;
});
