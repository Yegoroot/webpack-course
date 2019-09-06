## module

### rules { use: [{},{}]

загружает loader c конца

#### loaders

- **style-loader** adds CSS to the DOM by injecting a <style> tag
- **extract-loader** извлекает (html или css) из bundle
- **html-loader** export HTML as string

## devServer

### contentBase

online прогрузка контента отсюда

### overlay

вывод ошибок в экран браузера, а не в консоль

## Babel

### babel plugins

1 Сreate **.babelrc** and added

```json
{
  "plugins": ["transform-es2015-arrow-functions"]
}
```

2 теперь main.js можно использовать arrow function

```js
const a = () => console.log("---");
```

3 но сначала запустим main.js через **npm install babel-cli -g**

```bash
babel src/main.js
```

and babel will returned this

```js
const a = function() {
  return console.log("---");
};
```

### babel presets

выполняет роль многих плагинов (чтоб не прописывать для async, arrow func и тд). Подкюлючает много плагинов при загрузеи сервера можно увидить - Using plugins: /n ....

### babel-preset-minify (is the same uglifyJSPlugin)

Для минификации (например длинные названия переменных в короткие)

- https://babeljs.io/docs/en/babel-preset-minify (это в общем для скриптов)
  а конкртено для webpack исопльзуем babel-minify-webpack-plugin

## devMiddleware

когда express воспроизводит статические файлы, то для production это норм, но когда нам нужно на development обновлять информацию для этого и подходит **devMiddleware**
Но мы установливаем webpack-dev-middleware не только для того чтоб пересобирать статику для express при изминении файлов

## express

check new branch "express-server"

## hot reload html

### - nodemov

для обновления серверного и клиентского кода
(в частности) для просмотра изминений не только вебпака но и index.html, так как после middleware-hot-reloader перестал следить за изминениями
и для этого мы добавляем **html-webpack-plugin**

### - html-webpack-plugin

### - added "?reload=true" in require("webpack-hot-middleware/client?reload=true");

## package.json script

- **"clean"**: очистка папки "rm -rf node_modules/",
- **"start"**: запуск webpack сервера (old) "webpack-dev-server --open --config config/webpack.dev.js",
- **"build"**: build (map, etc) "webpack --config config/webpack.dev.js",
- **"build:prod"**: build проекта "webpack --config config/webpack.prod.js",
- **"server:dev"**: запуск сервера для разработки (работает с виртуальными файлами, поэтому build не нужен) "nodemon --inspect --watch config --watch src/server src/server/main.js",
- **"server:prod"**: запуск сервера на проде (работает с файлами dist, иначе не работает) "cross-env NODE_ENV=production nodemon --inspect --watch config --watch src/server src/server/main.js"

### - webpack.DefinePlugin

```js
// webpack.config
new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
});
```

```json
// package.json
 "server:prod": "cross-env NODE_ENV=production nodemon --inspect --watch config --watch src/server src/server/main.js"
```

таким образом можно получить значение в файлах нашего проекта например в App.js

```js
if (process.env.NODE_ENV === "production") {
  /* ... */
}
```
