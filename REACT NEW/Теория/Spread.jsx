function App() {
  return (
    <div className="App">
      {persons.map(person => {
        return <Persom {...person} />;
      })}
    </div>
  );
}
