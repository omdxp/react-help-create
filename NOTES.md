---
title: Notes
layout: template
filename: NOTES
---

# Notes

- To see the available commands for `rhc` you can run:

```sh
rhc --help
```

- To see the available positionals and options for a specific command like `create` you can run:

```sh
rhc create --help
```

- In order to `rhc` to work, you must be at the root of your React project. It will check and if somehow you are not at the root of the project, `rhc` will prompt:

```
You don't seem to be at the root of a react project
```

- In `create` command, `rhc` will create files with the project's used language, so if the project is written with TypeScript, it will write files with TypeScript, the same apply for JavaScript.

- If you want to create files with a specific language you can add `--js` or `--ts` options at the end of your `create` command, like this for example:

```sh
rhc create -p test-page --ts
```

- It is advisable to give the components and page names with this case `component-name` and `page-name`, for example:

```sh
rhc create -p world-to-react
```

- When creating reducers you should have already a redux implmentation created with `rhc create -r` so it can work.

- When creating actions, you should have already a redux implementation created with `rhc create -r` as well as an existed reducer with `rhc create --reducer <reducer-name>` so it can create actions for that specific reducer.

- Creating and deleting reducers and actions will not just delete files, but also update other files that depends on them under the `src/redux/` folder (Or your specified path for the root of redux folder in `rhc.config.json`).
