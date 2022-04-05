---
title: Combining Files
filename: COMBINING_FILES
---

# Combining Files

With `rhc` you can combine your components or pages in a specific path.

The following points shows how to user the `combine` command.

## Components

- To combine components that resides in `src/components/` folder to a specific path that resides under that same folder you can run:

```sh
rhc combine -c <component-name-1> <component-name-2> ... -f <folder-path>
```

- This will move the existed components for the given inputs to `src/components/<folder-path>/` folder.

- If somehome one of the given components does not exist, `rhc` will prompt:

```sh
Check if all of these components exist
```

### Example

In this example, we have `comp-1` and `comp-2` that exists under `src/components/` folder, and we want to move them to `src/components/foo/bar/` folder:

```sh
rhc combine -c comp-1 comp-2 -f foo/bar
```

- The command will outputs the following:

```sh
comp-1 component moved to src/components/foo/bar/
comp-2 component moved to src/components/foo/bar/
```

## Pages

- To combine pages that resides in `src/pages/` folder to a specific path that resides under that same folder you can run:

```sh
rhc combine -p <page-name-1> <page-name-2> ... -f <folder-path>
```

- This will move the existed pages for the given inputs to `src/pages/<folder-path>/` folder.

- If somehome one of the given pages does not exist, `rhc` will prompt:

```sh
Check if all of these pages exist
```

### Example

In this example, we have `page-1` and `page-2` that exists under `src/pages/` folder, and we want to move them to `src/pages/foo/bar/` folder:

```sh
rhc combine -p page-1 page-2 -f foo/bar
```

- The command will outputs the following:

```sh
page-1 page moved to src/pages/foo/bar/
page-2 page moved to src/pages/foo/bar/
```
