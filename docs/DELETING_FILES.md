# Deleting Files

With `rhc` you can delete what you already created with [`create` commands](./CREATING_FILES.md).

The following points shows how to deal with deleting your files with the `delete` command.

## Components

1. To delete a component simply run:

```sh
rhc delete -c <component-name>
```

- This will delete the component with the given name `<component-name>` under the `src/components/` folder.

- If the component does not exist, `rhc` will prompt the following:

```sh
src/components/<component-name>/ does not exist
```

2. To delete multiple components run:

```sh
rhc delete -c <component-name-1> <component-name-2> ...
```

- This will delete only the existed components with the given inputs that resides under the `src/components/` folder.

3. To delete one or multiple components that resides in a specific path under the `src/components/` folder, you can run:

```sh
rhc delete -c <component-name-1> <component-name-2> ... -f <folder-path>
```

- This will delete only the existed components with the given inputs that resides under the `src/components/<folder-path>/` folder.

## Pages

1. To delete a page simply run:

```sh
rhc delete -p <page-name>
```

- This will delete the page with the given name `<page-name>` under the `src/pages/` folder.

- If the page does not exist, `rhc` will prompt the following:

```sh
src/pages/<page-name>/ does not exist
```

2. To delete multiple pages run:

```sh
rhc delete -p <page-name-1> <page-name-2> ...
```

- This will delete only the existed pages with the given inputs that resides under the `src/pages/` folder.

3. To delete one or multiple pages that resides in a specific path under the `src/pages/` folder, you can run:

```sh
rhc delete -p <page-name-1> <page-name-2> ... -f <folder-path>
```

- This will delete only the existed pages with the given inputs that resides under the `src/pages/<folder-path>/` folder.

## Redux

- To delete a redux implementation run:

```sh
rhc delete -r
```

- This will delete the `redux` folder under `src/` with all of its files and subfolders.

- If `redux` does not exist, `rhc` will prompt:

```sh
src/redux/ does not exist
```
