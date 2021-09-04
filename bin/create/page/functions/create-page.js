const fs = require("file-system");
const {
  pageTemplateJs,
  pageTemplateTs,
  pageFunctionTemplateJs,
  pageFunctionTemplateTs,
} = require("../templates");

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
  const path =
    folder === ""
      ? `src/pages/${pageName.toLowerCase()}/`
      : `src/pages/${folder}/${pageName.toLowerCase()}/`;
  if (fs.existsSync(path)) {
    console.log(`${path} already exist`);
  } else {
    if (ts) {
      // check if template file exist
      if (template !== "") {
        const temp = fs
          .readdirSync(".template")
          .filter((file) => file.startsWith(template))[0];
        if (temp) {
          const file = fs.readFileSync(`.template/${temp}`, {
            encoding: "utf8",
            flag: "r",
          });
          fs.writeFile(
            `${path}ui/${pageName.toLowerCase()}-ui.tsx`,
            file,
            (err) => {
              if (err) {
                console.log(`Unable to create ${pageName} page ui`);
              } else {
                console.log(
                  `${path}ui/${pageName.toLowerCase()}-ui.tsx created`
                );
              }
            }
          );
          fs.writeFile(
            `${path}functions/index.ts`,
            pageFunctionTemplateTs(pageName),
            (err) => {
              if (err) {
                console.log(`Unable to create ${pageName} page functions`);
              } else {
                console.log(`${path}functions/index.ts created`);
              }
            }
          );
        } else {
          console.log(`.template/${template} file does not exist`);
        }
      } else {
        fs.writeFile(
          `${path}ui/${pageName.toLowerCase()}-ui.tsx`,
          pageTemplateTs(pageName),
          (err) => {
            if (err) {
              console.log(`Unable to create ${pageName} page ui`);
            } else {
              console.log(`${path}ui/${pageName.toLowerCase()}-ui.tsx created`);
            }
          }
        );
        fs.writeFile(
          `${path}functions/index.ts`,
          pageFunctionTemplateTs(pageName),
          (err) => {
            if (err) {
              console.log(`Unable to create ${pageName} page functions`);
            } else {
              console.log(`${path}functions/index.ts created`);
            }
          }
        );
      }
    } else {
      // check if template file exist
      if (template !== "") {
        const temp = fs
          .readdirSync(".template")
          .filter((file) => file.startsWith(template))[0];
        if (temp) {
          const file = fs.readFileSync(`.template/${temp}`, {
            encoding: "utf8",
            flag: "r",
          });
          fs.writeFile(
            `${path}ui/${pageName.toLowerCase()}-ui.jsx`,
            file,
            (err) => {
              if (err) {
                console.log(`Unable to create ${pageName} page ui`);
              } else {
                console.log(
                  `${path}ui/${pageName.toLowerCase()}-ui.jsx created`
                );
              }
            }
          );
          fs.writeFile(
            `${path}functions/index.js`,
            pageFunctionTemplateJs(pageName),
            (err) => {
              if (err) {
                console.log(`Unable to create ${pageName} page functions`);
              } else {
                console.log(`${path}functions/index.js created`);
              }
            }
          );
        } else {
          console.log(`.template/${template} file does not exist`);
        }
      } else {
        fs.writeFile(
          `${path}ui/${pageName.toLowerCase()}-ui.jsx`,
          pageTemplateJs(pageName),
          (err) => {
            if (err) {
              console.log(`Unable to create ${pageName} page ui`);
            } else {
              console.log(`${path}ui/${pageName.toLowerCase()}-ui.jsx created`);
            }
          }
        );
        fs.writeFile(
          `${path}functions/index.js`,
          pageFunctionTemplateJs(pageName),
          (err) => {
            if (err) {
              console.log(`Unable to create ${pageName} page functions`);
            } else {
              console.log(`${path}functions/index.js created`);
            }
          }
        );
      }
    }
  }
};
