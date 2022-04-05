---
title: Creating Files
filename: CREATING_FILES
---

# Creating Files

`rhc` provide you more flexibility and easy to use approach to create your files and folders for your componets, pages and redux implementation.

- By default `rhc` create files with the project's language, so if the project is written in TypeScript all the created files will be in TypeScript, and the same applies for JavaScript.

- If you want to force the use of a specific language you can add the `--js` or `--ts` options at the end of your `create` commands.

- `rhc` will not overwrite the existed implementation for all of the `create` commands.

The following points shows how to use the `create` command.

## Components

1. To create your components simply run:

```sh
rhc create -c <component-name>
```

- This will create a component named after the given name `<component-name>` under the `src/components/<component-name>/` folder.

### Example

```sh
rhc create -c test-component
```

- This command will create the following directory `src/components/test-component/`:

```sh
src
└───components
    └───test-component
            index.jsx
            styles.css
```

- Where `index.jsx` represents the React FC component that contains the following:

```jsx
import "./styles.css";

const TestComponent = () => {
  return <div>TestComponent component created!</div>;
};
export default TestComponent;
```

- And for the `styles.css` you will see:

```css
/* TestComponent styles */
```

2. To create multiple components simply run:

```sh
rhc create -c <component-name-1> <component-name-2> ...
```

- This will create multiple components for the given names under the `src/components/` folder.

### Exmaple

```sh
rhc create -c comp-1 comp-2
```

- This command will create under the `src/components/` folder the following:

```sh
src
└───components
    ├───comp-1
    │       index.jsx
    │       styles.css
    │
    └───comp-2
            index.jsx
            styles.css
```

3. To create one or mutliple components in a specified path that resides under the `src/components/` folder, simply run:

```sh
rhc create -c <component-name-1> <component-name-2> ... -f <folder-path>
```

- This will create your components under the `src/components/<folder-path>/` folder.

### Example

```sh
rhc create -c comp-1 comp-2 -f foo/bar
```

- This command will create under the `src/components/` folder the following:

```sh
src
└───components
    └───foo
        └───bar
            ├───comp-1
            │       index.jsx
            │       styles.css
            │
            └───comp-2
                    index.jsx
                    styles.css
```

## Pages

1. To create your page simply run:

```sh
rhc create -p <page-name>
```

- This will create a page after the given name `page-name` under the `src/pages/` folder.

### Example

```sh
rhc create -p test-page
```

- This will create the following:

```sh
src
pages
    └───test-page
        │   index.jsx
        │   styles.css
        │
        └───functions
                index.js
```

- Where `index.jsx` represent the page which is nothing but a React FC component that contains the following:

```jsx
import "./styles.css";

const TestPage = () => {
  return <div>TestPage page created!</div>;
};
export default TestPage;
```

- As for `styles.css` you will find:

```css
/* TestPage styles */
```

- And under the `functions` folder you should write your page's functions and export them in `function/index.js` file, which by default it will contain the following:

```js
// write your TestPage functions here
```

2. To create multiple pages simply run:

```sh
rhc create -p <page-name-1> <page-name-2> ...
```

- This will create multiple pages under the `src/pages/` folder.

### Example

```sh
rhc create -p page-1 page-2
```

- This will create the following:

```sh
src
pages
    ├───page-1
    │   │   index.jsx
    │   │   styles.css
    │   │
    │   └───functions
    │           index.js
    │
    └───page-2
        │   index.jsx
        │   styles.css
        │
        └───functions
                index.js
```

3. To create one or multiple pages in a specific path that resides under `src/pages/` folder, simply run:

```sh
rhc create -p <page-name-1> <page-name-2> ... -f <folder-path>
```

- This will create your pages under the `src/pages/<folder-path>` folder.

### Example

```sh
rhc create -p page-1 page-2 -f foo/bar
```

- This will create the following:

```sh
src
└───pages
    └───foo
        └───bar
            ├───page-1
            │   │   index.jsx
            │   │   styles.css
            │   │
            │   └───functions
            │           index.js
            │
            └───page-2
                │   index.jsx
                │   styles.css
                │
                └───functions
                        index.js
```

## Templates

You can create your pages and components with your defined templates by following these steps:

1. First thing to do is to create a `.template` folder at the root of your react project.

2. Inside the `.template` folder you can add your template, for example `componentWithUseEffect.tsx` (the file extension doesn't matter so it could be `*.jsx`, `*.js` or `*.tsx`):

```jsx
export default function __COMPONENT__() {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}
```

- There is a restriction in naming these templates which is you should not put dots (`.`) between the name, like this (`component.WithUseEffect.jsx`). It should only contain one dot that makes the extension file like we're doing above.

- You should type `__COMPONENT__` in the template file and it will be replaced with the component name you want to create.

3. After creating your template you can use them to create components or pages as the following:

```sh
rhc create -c <component-name> -t <template-name>
```

```sh
rhc create -p <page-name> -t <template-name>
```

- And of course, you can create multiple components or pages with the same template.

### Example

As for our example it can be used like this for the above template:

```sh
rhc create -c comp -t componentWithUseEffect
```

- This will create `comp` component under `src/components/` folder and the `index.jsx` for this component will contain the same code written in the template.

- For the page case, the `index.jsx` for that page will contain the code written in the template.

## Redux

- To create a redux implementation run:

```sh
rhc create -r
```

- This will create a `redux` folder under the `src/` folder containing the following:

```sh
src
└───redux
    │   index.js
    │
    ├───actions
    │   └───general
    │           index.js
    │
    └───reducers
        │   index.js
        │
        └───general
                index.js
```

- Where `index.js` under the `redux` folder contains the redux store definition:

```js
import { applyMiddleware, compose, createStore } from "redux";
import { mainReducer } from "./reducers";

/**
 * the main redux state, with all the reducers
 */
export const mainStore = createStore(
  mainReducer,
  compose(applyMiddleware(thunk))
);

/**
 * Creates a new redux state each time this function is called, this is used only for unit tests, to ensure that we have fresh state on each individual test
 */
export const createMainStore = () => {
  return createStore(mainReducer, compose(applyMiddleware(thunk)));
};
```

- And `actions` folder contains the action for each reducer, as for a example, at first `rhc` will create a sample reducer and action which is called `general`.

- The `general` action's `index.js` contains:

```js
// write your general actions here

// this is an example for an action
export const init = () => async (dispatch, getState) => {
  dispatch({ type: "UPDATE_GENERAL", payload: { message: "init created!" } });
};
```

- And the `general` reducer's `index.js` contains:

```js
const initialState = { message: "" };

export const general = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_GENERAL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
```

- And the `index.js` file under the `reducers` folder contains the following:

```js
import { combineReducers } from "redux";
import { general } from "./general";

export const mainReducer = combineReducers({
  general,
});
```

- In TypeScript, the files will be written as the following:

`redux/index.ts`

```ts
import { applyMiddleware, compose, createStore } from "redux";
import { mainReducer } from "./reducers";

/**
 * the main redux state, with all the reducers
 */
export const mainStore = createStore(
  mainReducer,
  compose(applyMiddleware(thunk))
);

export type StateInterface = ReturnType<typeof mainStore.getState>;

/**
 * list of action types
 */
export type ActionType = "UPDATE_GENERAL";

export interface Action<T> {
  type: ActionType;
  payload: Partial<T>;
}

export type ThunkResult<
  A = Record<string, unknown>,
  E = Record<string, unknown>
> = ThunkAction<void, StateInterface, E, Action<A>>;

export type Dispatch<A> = ThunkDispatch<
  StateInterface,
  Record<string, unknown>,
  Action<A>
>;
```

`redux/actions/general/index.ts`

```ts
import { GeneralState } from "../../reducers/general";
import { ThunkResult } from "../..";

// write your general actions here

// this is an example for an action
export const init =
  (): ThunkResult<GeneralState> => async (dispatch, getState) => {
    dispatch({ type: "UPDATE_GENERAL", payload: { message: "init created!" } });
  };
```

`redux/reducers/general/index.ts`

```ts
import { Action } from "../..";

export interface GeneralState {
  message: string;
}

export const general = (
  state: GeneralState = {
    message: "",
  },
  action: Action<GeneralState>
) => {
  switch (action.type) {
    case "UPDATE_GENERAL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
```

`redux/reducers/index.ts`

```ts
import { combineReducers } from "redux";
import { general } from "./general";

export const mainReducer = combineReducers({
  general,
});
```

## Configuration

With the above steps, you can now create a configuration file which will be used by `rhc` to create your files with your custom config.

- To create a default configuration file run:

```sh
rhc create --config
```

- This will create a `rhc.config.json` file at the root of your project. The file will contain the following:

```json
{
  "withCSS": true,
  "withFunctions": true,
  "withProps": true,
  "defaultExports": true,
  "componentsRoot": "./src/components",
  "pagesRoot": "./src/pages",
  "reduxRoot": "./src/redux"
}
```

1. `withCSS`: if true, create `styles.css` file for components and pages, if false, don't create `styles.css` file, default is true.
2. `withFunctions`: if true, create `functions` folder for pages, if false, don't create `functions` folder, default is true.
3. `withProps`: if true, create props `interface` for components and pages (in TS only), if false, don't create props `interface`, default is true.
4. `defaultExports`: if true, create default export for components and pages, if false, create named export for components and pages, default is true.
5. `componentsRoot`: the root folder for components, default is `./src/components`.
6. `pagesRoot`: the root folder for pages, default is `./src/pages`.
7. `reduxRoot`: the root folder for redux, default is `./src/redux`.

- If no configuration file is found or you don't specify some of the configuration, the default configuration will be used.
