### Задание:

Создаем приложение, которое будет иметь такой функционал:

1) В файле server.js мы создаем сервер через модуль 'http' который на запрос по ссылке "/people"
возвращает массив с людьми взятых из файла people.json
2) В папке js/parts мы пишем клиенскую часть: мы выводим сисок всех людей из json файла на странице осле успешного выполнения запроса


После того как мы сделали весь функционал устанавливаем себе grunt

Для установки grunt глобально:

```
npm install -g grunt-cli
```

Для установки grunt локально для проекта пишем:

```
npm install grunt --save-dev
```

Для установки less глобально

```
npm install less -g
```