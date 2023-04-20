const path = require('path'); // подключаем path к конфигу вебпак (утилита, которая превращает относительный путь в абсолютный)

// module.exports — это синтаксис экспорта в Node.js
module.exports = {
  entry: { main: './src/index.js' }, // указали первое место, куда заглянет webpack, — файл index.js в папке src

  // объект output (точка выхода) - итоговый файл, куда «Вебпак» сложит весь js-код
  output: {
    path: path.resolve(__dirname, 'dist'), // абсолютный путь к точке выхода
    filename: 'main.js', // имя файла, куда «Вебпак» положит код
    publicPath: '', // свойство для обновления путей внутри CSS- и HTML-файлов
  },

  // режим разработчика
  mode: 'development',

  // настройки локального сервера
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true, // сайт будет открываться сам при запуске npm run dev
  },

  // файлы нужно пропускать через Babel (наше правило звучит так: «если тебе попадётся файл с расширением .js, сначала отдай этот файл модулю babel-loader, а затем добавляй в сборку. Но не применяй это правило к пакетам, скачанным из NPM, которые лежат в папке node_modules»)
  module: {
    // rules — это массив правил, добавим в него объект правил для бабеля
    rules: [
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/',
      },
    ],
  },
};
