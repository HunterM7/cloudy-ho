# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Инструкция по запуску

1.  Открываем консоль и переходим в папку, куда будем клонировать проект.

    Пример:

        cd ~Documents/Projects/CloudyHo

2.  Чтобы склонировать проект пишем в консоль:

        git clone https://github.com/HunterM7/wheater-app.git .

3.  После клонирования проекта, необходимо установить все зависимости.

    Для этого пишем в консоль:

        npm i

4.  Файл **test.env** необходимо переименовать в **.env** и указать корректный токен от OpenWeather.

    Пример:

        VITE_WEATHER_API_KEY = "Your_Api_Key"

5.  После установки всех зависимостей проект можно запустить.

    Для запуска пишем в консоль:

        npm run dev
