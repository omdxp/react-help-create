# Summary

This command line will help you create your React project with a useful structure that is easy to understand. It creates components and pages in separate folders to help distinguish them.

The following project structure is used by this command:

```
src
├───components
│   ├───comp-one
│   │       index.jsx
│   │       styles.css
│   │
│   ├───comp-two
│   │       index.jsx
│   │       styles.css
│   │
│   └───folder
│       └───comp-three
│               index.jsx
│               styles.css
│
├───redux
│   │   index.js
│   │
│   ├───actions
│   │   └───general
│   │           index.js
│   │
│   └───reducers
│       │   index.js
│       │
│       └───general
│               index.js
│
└───pages
    │
    ├───folder
    │   │
    │   ├───page-four
    │   │   │   index.jsx
    │   │   │   styles.css
    │   │   │
    │   │   └───functions
    │   │           index.js
    │   │
    │   └───page-three
    │       │   index.jsx
    │       │   styles.css
    │       │
    │       └───functions
    │               index.js
    │
    ├───page-one
    │   │   index.jsx
    │   │   styles.css
    │   │
    │   └───functions
    │           index.js
    │
    └───page-two
        │   index.jsx
        │   styles.css
        │
        └───functions
                index.js
```

- As you can see above, the `src` folder is the folder that resides at the root of your React project, and under this folder, you will find the `components` folder which contains all the shared components that are used throughout the page.

- The `pages` folder contains the app's pages, which can use some of the shared components above it.

- In each component, you will find `index.jsx`. This contains the components `JSX.Element`, for syntaxes, and `styles.css`, which contains the styles for that component.

- In each page you will find `index.jsx` that contains the `JSX.Element` syntaxes, `styles.css` that contains the page's styles, and a `functions` folder which contains the page's specific functions.

- Each page can use one of the shared components that are defined in `components` folder, and you can pass the functions to those components. There is no `functions` folder in a component's subfolder.

- As for the `redux` folder, you can see there is `index.js` which contains the redux store, and `actions` and `reducers` folders are next to it so that you can find the things that are related to redux in one single place.

- This command line can write code in both JavaScript and TypeScript. By default it will use the language that your React project is written in, and of course you can override the used language using one of the command line's options.

- This command line can be customized by altering a configuration file that you can create in the root of your project (`rhc.config.json`).
