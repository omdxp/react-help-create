#!usr/bin/env node

const yargs = require("yargs");
const { fs } = require("file-system");
const { createComponent, createPage, createRedux } = require("./create");
const { deleteComponents, deletePages, deleteRedux } = require("./delete");
const { combineComponents, combinePages } = require("./combine");

yargs
  .scriptName("rhc")
  .usage("$0 <command> [options]")
  .command(
    "create [name]",
    "create components, pages and redux implementation",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--component",
          type: "string",
          describe: "to create components",
        })
        .array("-c")
        .positional("-p", {
          alias: "--page",
          type: "string",
          describe: "to create pages",
        })
        .array("-p")
        .positional("-r", {
          alias: "--redux",
          type: "string",
          describe: "to create redux implementation",
        })
        .option("js", {
          alias: "javascript",
          default: true,
          describe: "to create files in javascript",
        })
        .option("ts", {
          alias: "typescript",
          describe: "to create files in typescript",
        })
        .option("f", {
          alias: "folder",
          type: "string",
          default: "",
          describe: "to create files in a specific folder",
        });
    },
    (argv) => {
      if (fs.existsSync("package.json")) {
        const { component, page, redux, js, ts, folder } = argv;
        if (component) {
          component.forEach((c) => createComponent(c, js, ts, folder));
        } else if (page) {
          page.forEach((p) => createPage(p, js, ts, folder));
        } else if (redux) {
          createRedux(redux, js, ts);
        } else {
          console.log("Check usage: rhc create --help");
        }
      } else {
        console.log("You don't seem to be at the root of a react project");
      }
    }
  )
  .command(
    "delete [name]",
    "delete components, pages and redux implementation",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--component",
          type: "string",
          describe: "to delete components",
        })
        .array("-c")
        .positional("-p", {
          alias: "--page",
          type: "string",
          describe: "to delete pages",
        })
        .array("-p")
        .positional("-r", {
          alias: "--redux",
          type: "string",
          describe: "to delete redux implementation",
        })
        .option("f", {
          alias: "folder",
          type: "string",
          default: "",
          describe: "to delete files in a specific folder",
        });
    },
    (argv) => {
      if (fs.existsSync("package.json")) {
        const { component, page, redux, folder } = argv;
        if (component) {
          deleteComponents(component, folder);
        } else if (page) {
          deletePages(page, folder);
        } else if (redux) {
          deleteRedux(redux);
        } else {
          console.log("Check usage: rhc delete --help");
        }
      } else {
        console.log("You don't seem to be at the root of a react project");
      }
    }
  )
  .command(
    "combine [name]",
    "combine components or pages in a specific folder",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--components",
          type: "string",
          array: true,
          describe: "components to be combined in a folder",
        })
        .array("-c")
        .positional("-p", {
          alias: "--pages",
          type: "string",
          array: true,
          describe: "pages to be combined in a folder",
        })
        .array("-p")
        .option("f", {
          alias: "folder",
          type: "string",
          describe: "name or path of folder that combines components or pages",
          demandOption: "this option is mandatory" | true,
        });
    },
    (argv) => {
      if (fs.existsSync("package.json")) {
        const { components, pages, folder } = argv;
        if (components) {
          combineComponents(components, folder);
        } else if (pages) {
          combinePages(pages, folder);
        } else {
          console.log("Check usage: rhc combine --help");
        }
      } else {
        console.log("You don't seem to be at the root of a react project");
      }
    }
  )
  .help().argv;
