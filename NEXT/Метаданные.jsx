//# Метаданные - главный layout
export const metadata = {
  title: 'Тестовая страница',
  description: 'Тестовая страница',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

//# Динамическая страница с метаданными
export function generateMetadata({ params: { id } }) {
  return {
    title: id,
  };
}

function TestPageId({ params: { id } }) {
  return <h1>Это страница {id}</h1>;
}
