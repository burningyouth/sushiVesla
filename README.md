### Инициализация
Чтобы собирать проект для начала нужно написать в папке `npm install`.
### Сборка
Чтобы уже собрать нужно написать `npm run b` или `npm run build`. Это запустит команду: `webpack --config ./build/webpack.build.conf.js`, но я думаю так писать слишком долго.

Также можно запустить тестовый веб сервер с помощью `npm run d` или `npm run dev`. В браузере откроется `build/index.html` по умолчанию. Изменить индексную страницу можно в `build/webpack.dev.conf.js`. Эквивалентная команда: `webpack-dev-server --open --config ./build/webpack.dev.conf.js`

Еще есть вариант `npm run s` или `npm run serve`. Эта команда сначала забилдит, а потом запустит тестовый сервер.

