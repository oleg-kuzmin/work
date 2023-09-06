//# Зарезервированные слова
//* Файлы page.js, page.jsx, page.tsx
// src/app/page.jsx
// src/app/pageName/page.jsx

//* Файлы layout.js, layout.jsx, layout.tsx
// src/app/layout.jsx
// src/app/pageName/layout.jsx

//* Файлы loading.js, loading.jsx, loading.tsx
// src/app/loading.jsx
// src/app/pageName/loading.jsx

// (export default)
function LoadingPage() {
  return <h1>Loading...</h1>;
}

//* Файлы error.js, error.jsx, error.tsx
// src/app/error.jsx
// src/app/pageName/error.jsx

// (export default)
'use client';

function ErrorPage({ error: { error: error } }) {
  return <h1>Oops! {error.message}</h1>;
}
