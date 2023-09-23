//* SSG static site generation { cache: 'force-cache' } - опции можно не указывать
async function getAllFilms() {
  return fetch('https://swapi.dev/api/films').then(res => res.json());
}

//* SSR server side rendering { cache: 'no-store' }
async function getAllFilms() {
  return fetch('https://swapi.dev/api/films', { cache: 'no-store' }).then(res => res.json());
}

//* ISR incremental static regeneration { next: { revalidate: 60 } }
async function getAllFilms() {
  return fetch('https://swapi.dev/api/films', { next: { revalidate: 60 } }).then(res => res.json());
}

async function FilmsPage() {
  const allFilms = await getAllFilms();
  const result = allFilms.results.map(film => {
    return <div key={film.url}>{film.title}</div>;
  });
  return <div>{result}</div>;
}
