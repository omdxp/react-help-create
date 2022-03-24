const fs = require("file-system");
const {
  pageTemplateJs,
  pageTemplateTs,
  pageFunctionTemplateJs,
  pageFunctionTemplateTs,
  stylesTemplate,
} = require("../templates");
const { config } = require("../../../utils");

/**
 * @function createPage
 * @description this function is used to create a page.
 * @param {string} pageName - the name of the page.
 * @param {boolean} js - if the page is a javascript page.
 * @param {boolean} ts - if the page is a typescript page.
 * @param {string} folder - the folder of the page.
 * @param {string} template - the template to create the page component.
 * @version 1.1.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createPage = (pageName, js, ts, folder, template) => {
  const { withCSS, withFunctions, withProps, defaultExports, pagesRoot } =
    config;
  let page = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  if (pageName.includes("-")) {
    page = "";
    let words = pageName.split("-");
    words.forEach((w) => {
      page += w.charAt(0).toUpperCase() + w.slice(1);
    });
  }
  const path =
    folder === ""
      ? `${pagesRoot}/${pageName.toLowerCase()}/`
      : `${pagesRoot}/${folder}/${pageName.toLowerCase()}/`;
  if (fs.existsSync(path)) {
    console.log(`${path} already exist`);
  } else {
    if (ts) {
      // check if template file exist
      if (template !== "") {
        const temp = fs
          .readdirSync(".template")
          .filter((file) => file.split(".")[0] === template)[0];
        if (temp) {
          const file = fs.readFileSync(`.template/${temp}`, {
            encoding: "utf8",
            flag: "r",
          });
          fs.writeFile(
            `${path}index.tsx`,
            file.replace(/__COMPONENT__/g, page),
            (err) => {
              if (err) {
                console.log(`Unable to create ${page} page`);
              } else {
                console.log(`${path}index.tsx created`);
              }
            }
          );
          withFunctions &&
            fs.writeFile(
              `${path}functions/index.ts`,
              pageFunctionTemplateTs(page),
              (err) => {
                if (err) {
                  console.log(`Unable to create ${page} page functions`);
                } else {
                  console.log(`${path}functions/index.ts created`);
                }
              }
            );
          withCSS &&
            fs.writeFile(`${path}styles.css`, stylesTemplate(page), (err) => {
              if (err) {
                console.log(`Unable to create ${page} component styles`);
              } else {
                console.log(`${path}styles.css created`);
              }
            });
        } else {
          console.log(`.template/${template} file does not exist`);
        }
      } else {
        fs.writeFile(
          `${path}index.tsx`,
          pageTemplateTs(page, withCSS, defaultExports, withProps),
          (err) => {
            if (err) {
              console.log(`Unable to create ${pageName} page ui`);
            } else {
              console.log(`${path}index.tsx created`);
            }
          }
        );
        withFunctions &&
          fs.writeFile(
            `${path}functions/index.ts`,
            pageFunctionTemplateTs(page),
            (err) => {
              if (err) {
                console.log(`Unable to create ${page} page functions`);
              } else {
                console.log(`${path}functions/index.ts created`);
              }
            }
          );
        withCSS &&
          fs.writeFile(`${path}styles.css`, stylesTemplate(page), (err) => {
            if (err) {
              console.log(`Unable to create ${page} component styles`);
            } else {
              console.log(`${path}styles.css created`);
            }
          });
      }
    } else {
      // check if template file exist
      if (template !== "") {
        const temp = fs
          .readdirSync(".template")
          .filter((file) => file.split(".")[0] === template)[0];
        if (temp) {
          const file = fs.readFileSync(`.template/${temp}`, {
            encoding: "utf8",
            flag: "r",
          });
          fs.writeFile(
            `${path}index.jsx`,
            file.replace(/__COMPONENT__/g, page),
            (err) => {
              if (err) {
                console.log(`Unable to create ${page} page`);
              } else {
                console.log(`${path}index.jsx created`);
              }
            }
          );
          withFunctions &&
            fs.writeFile(
              `${path}functions/index.js`,
              pageFunctionTemplateJs(page),
              (err) => {
                if (err) {
                  console.log(`Unable to create ${page} page functions`);
                } else {
                  console.log(`${path}functions/index.js created`);
                }
              }
            );
          withCSS &&
            fs.writeFile(`${path}styles.css`, stylesTemplate(page), (err) => {
              if (err) {
                console.log(`Unable to create ${page} component styles`);
              } else {
                console.log(`${path}styles.css created`);
              }
            });
        } else {
          console.log(`.template/${template} file does not exist`);
        }
      } else {
        fs.writeFile(
          `${path}index.jsx`,
          pageTemplateJs(page, withCSS, defaultExports),
          (err) => {
            if (err) {
              console.log(`Unable to create ${page} page`);
            } else {
              console.log(`${path}index.jsx created`);
            }
          }
        );
        withFunctions &&
          fs.writeFile(
            `${path}functions/index.js`,
            pageFunctionTemplateJs(page),
            (err) => {
              if (err) {
                console.log(`Unable to create ${page} page functions`);
              } else {
                console.log(`${path}functions/index.js created`);
              }
            }
          );
        withCSS &&
          fs.writeFile(`${path}styles.css`, stylesTemplate(page), (err) => {
            if (err) {
              console.log(`Unable to create ${page} component styles`);
            } else {
              console.log(`${path}styles.css created`);
            }
          });
      }
    }
  }
};
