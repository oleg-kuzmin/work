//# Пример использования

// Добавить export async function generateStaticParams
// Добавить export default export default function Post

async function generateStaticParams() {
  const films = await fetch('https://swapi.dev/api/films').then(res => res.json());

  return films.results.map((film: any) => ({
    slug: film.title.replace(/\s+/g, '-'),
  }));
}

function Post({ params }: any) {
  return (
    <div>
      <h1>Post width id {JSON.stringify(params)}</h1>
    </div>
  );
}
