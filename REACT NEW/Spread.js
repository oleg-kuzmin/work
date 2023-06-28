function App() {
  return (
    <div className="App">
      {persons.map(person => {
        return <Person {...person} />;
      })}
    </div>
  );
}
