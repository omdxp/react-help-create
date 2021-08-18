#!usr/bin/env node

const yargs = require("yargs");
const { createComponent, createPage, createRedux } = require("./create");

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
      const { component, page, redux, js, ts, folder } = argv;
      if (component) {
        component.forEach((c) => createComponent(c, js, ts, folder));
      } else if (page) {
        createPage(page, js, ts, folder);
      } else if (redux) {
        createRedux(redux, js, ts, folder);
      } else {
        console.log("Check usage: rhc create --help");
      }
    }
  )
  .help().argv;
