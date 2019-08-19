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

## additional

### babel plugins

1 When you create **.babelrc** and added

```json
{
  "plugins": ["transform-es2015-arrow-functions"]
}
```

2 in main.js

```js
const a = () => console.log("---");
```

3 then **npm install babel-cli -g**
after that we run in cli

```bash
babel src/main.js
```

and babel will returned this

```js
// const a = function () {
//   return console.log("---");
// };
```

### babel presets

выполняет роль многих плагинов (чтоб не прописывать для async, arrow func и тд). Подкюлючает много плагинов при загрузеи сервера можно увидить - Using plugins: /n ....

## devMiddleware

когда express воспроизводит статические файлы, то для production это норм, но когда нам нужно на development обновлять информацию для этого и подходит **devMiddleware**

## express

check new branch "express-server"
