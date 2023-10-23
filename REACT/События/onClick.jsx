//# onClick (Клик мышкой)
<button
  onClick={() => {
    setArtists([...artists, { id: nextId++, name: name }]);
  }}
></button>;
