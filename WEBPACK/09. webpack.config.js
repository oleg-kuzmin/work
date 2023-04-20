const path = require('path'); // подключаем path к конфигу вебпак (утилита, которая превращает относительный путь в абсолютный)
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключаем плагин html-webpack-plugin (для работы с html)
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключаем плагин clean-webpack-plugin (для очистки dist)

// module.exports — это синтаксис экспорта в Node.js
module.exports = {
  //# точка входа — файл index.js в папке src
  entry: { main: './src/index.js' },

  //# объект output (точка выхода) - итоговый файл, куда «Вебпак» сложит весь js-код
  output: {
    path: path.resolve(__dirname, 'dist'), // абсолютный путь к точке выхода
    filename: 'main.js', // имя файла, куда «Вебпак» положит код
    publicPath: '', // свойство для обновления путей внутри CSS- и HTML-файлов
  },

  //# режим разработчика
  mode: 'development',

  //# настройки локального сервера
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true, // сайт будет открываться сам при запуске npm run dev
  },

  //# настройка Babel
  module: {
    // rules — это массив правил, добавим в него объект правил для бабеля
    rules: [
      {
        test: /\.js$/, // регулярное выражение, которое ищет все js файлы
        use: 'babel-loader', // при обработке этих файлов нужно использовать babel-loader
        exclude: '/node_modules/', // исключает папку node_modules, файлы в ней обрабатывать не нужно
      },
    ],
  },

  //# plugins - массив плагинов
  plugins: [
    //# настройка html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к файлу index.html
    }),
    //# настройка clean-webpack-plugin
    new CleanWebpackPlugin(),
  ],
};
