const fs = require("file-system");

/**
 * @function combinePages
 * @description this function is used to combine pages in a specific folder.
 * @param {Array} pages - array of pages to be combined.
 * @param {string} folder - the name or path of folder that combines the pages.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.combinePages = (pages, folder) => {
  if (pages.length <= 1) {
    console.log("Please provide at least 2 pages");
    return;
  }
  let folders = [];
  pages.forEach((page) => {
    fs.readdirSync(`src/pages/`)
      .filter((f) => f === page.toLowerCase())
      .forEach((f) => {
        folders.push(f);
      });
  });
  if (folders.length < pages.length) {
    console.log("Check if these pages do exist");
    return;
  }
  const path = `src/pages/${folder}`;
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  } else {
    console.log(`${path} already exist`);
    console.log(`Writing new files...`);
  }
  folders.forEach((f) => {
    const path = `src/pages/${folder}/${f}/`;
    if (fs.existsSync(path)) {
      console.log(`${path} already exist`);
    } else {
      fs.renameSync(`src/pages/${f}/`, path, (err) => {
        if (err) {
          console.log(`Cannot move ${f} page`);
        } else {
          console.log(`${f} page moved to src/pages/${folder}/`);
        }
      });
      console.log(`${f} page moved to src/pages/${folder}/`);
    }
  });
};
