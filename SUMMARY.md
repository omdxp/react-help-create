---
title: Summary
layout: template
filename: SUMMARY.md
---

# Summary

This command line help you create your React project in a easy and useful structure by creating components and pages in separate folders in order to distinguish between them.

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

- As you can see above, the `src` folder is the folder that resides at the root of your React project and under this folder, you will find the `components` folder which contains all the shared components that are used through out the page. The `pages` folder contains the app's pages that can uses some of the shared components above it.

- In each component you will find `index.jsx` that contains the components `JSX.Element` syntaxes, and `styles.css` that contains the styles for that component.

- In each page you will find `index.jsx` that contains the `JSX.Element` syntaxes, and `styles.css` that contains the screen's styles and `functions` folder which will contain the page's specific functions.

- Each page can use one of the shared components that are defined in `components` folder, and you can pass the functions to those components hence there is not `functions` folder under a component subfolder.

- As for the `redux` folder you can see there is `index.js` which contain the redux store, and `actions` and `reducers` folders are next to it so you can find only things that are related to redux in one single place.

- This command line can write code in both JavaScript and TypeScript. By default it will use the used language for your React project and of course you can override the used language using one of its options.

- This command line can be customized by a configuration file that you can create in the root of your project (`rhc.config.json`).
