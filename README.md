# Task Manager

## Techs

```sh
VueJS 3 Composition API
Tailwindcss 
Ionic
```

![](https://github.com/DianaCCM/task-manager/blob/master/src/assets/img/taskManager.gif)

## Project creation

```sh
npm init vue@latest
cd project-name
npm install
```

## Project setup

```sh
npm install
npm run dev
```

## Recommended Structured (example)

```sh
src/
    |- assets/ # Static files such as images, fonts, etc.
        |- images/
        |- fonts/
    |- components/ # Reusable components of the application
        |- shared/
            |- Button.vue
        |- Header.vue
        |- Footer.vue
    |- router/ # Configuration and route definition of the application
        |- index.js
    |- store/ # Files related to application state management
        |- store.js
    |- views/ # Main view components of the application
        |- Home.vue
        |- About.vue
    |- App.vue # Root component of the application
    |- main.js # Main entry point of the application
```
