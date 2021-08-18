# Documentation

## Table of Content

1. [Summary](#summary)
2. [Creating files](#creating-files)

- 1. [Creating components](#creating-components)
- 2. [Creating pages](#creating-pages)
- 3. [Creating redux implementation](#creating-redux-implementation)

3. [Deleting files](#deleting-files)

- 1. [Deleting components](#deleting-components)
- 2. [Deleting pages](#deleting-pages)
- 3. [Deleting redux implementation](#deleting-redux-implementation)

4. [Combining components and pages](#combining-components-and-pages)

- 1. [Combining components](#combining-components)
- 2. [Combining pages](#combining-pages)

5. [Notes](#notes)

## Summary

- You can run `rhc --help` to see the available commands.
- By default `rhc` helps you create components, pages and redux implementation in JavaScript (so `--js` is optional).
- If you want to create components or pages in TypeScript, all what you need to do is to add the option `--ts` at the end of your command line.
- You don't have to specify the language option in `delete` nor in `combine` mode.

## Creating files

- Run `rhc create --help` to see the available options.

### Creating components

- To create a component run

```sh
rhc create -c <component_name>
```

- To create multiple components run

```sh
rhc create -c <component_name_1> <component_name_2> ...
```

- To create a component or multiple components in a specific folder run

```sh
rhc create -c <component_name_1> <component_name_2> ... -f <folder>
```

### Creating pages

- To create a page run

```sh
rhc create -p <page_name>
```

- To create multiple pages run

```sh
rhc create -p <page_name_1> <page_name_2> ...
```

- To create a page or multiple pages in a specific folder run

```sh
rhc create -p <page_name_1> <page_name_2> ... -f <folder>
```

### Creating redux implementation

- To create a redux implementation run

```sh
rhc create -r <redux_folder_name>
```

## Deleting files

- Run `rhc delete --help` to see the available options.

### Deleting components

- To delete a component run

```sh
rhc delete -c <component_name>
```

- To delete multiple components run

```sh
rhc delete -c <component_name_1> <component_name_2> ...
```

- To delete a component or multiple components in a specific folder run

```sh
rhc delete -c <component_name_1> <component_name_2> ... -f <folder>
```

- To delete all components that resides in a specific folder run

```sh
rhc delete -c -f <folder>
```

### Deleting pages

- To delete a page run

```sh
rhc delete -p <page_name>
```

- To delete multiple pages run

```sh
rhc delete -p <page_name_1> <page_name_2> ...
```

- To delete a page or multiple pages in a specific folder run

```sh
rhc delete -p <page_name_1> <page_name_2> ... -f <folder>
```

- To delete all pages that resides in a specific folder run

```sh
rhc delete -p -f <folder>
```

### Deleting redux implementation

- To delete a redux implementation run

```sh
rhc delete -r <redux_folder_name>
```

## Combining files

- Run `rhc combine --help` to see the available options.

### Combining components

- To combine specific components in a specific folder run

```sh
rhc combine -c <component_name_1> <component_name_2> ... -f <folder>
```

### Combining pages

- To combine specific pages in a specific folder run

```sh
rhc combine -p <page_name_1> <page_name_2> ... -f <folder>
```

## Notes

- The `-f` doesn't have to be specified with the folder name, it can also be specified with the path of the new folder, for example:

```sh
rhc create -c comp1 comp2 -f path/to/folder
```

This will create comp1 and comp2 components inside the folder `src/components/path/to/folder/`.

- Keep in mind that you are at the root of your react project before executing this command, the command will check either way.

- `rhc` will alway check if files or folders does exist for all commands.

- `rhc` will prompt you to check the usage if you do some error using any of the available commands.
