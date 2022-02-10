const fs = require("file-system");

/**
 * @function combinePages
 * @description this function is used to combine pages in a specific folder.
 * @param {Array} pages - array of pages to be combined.
 * @param {string} folder - the name or path of folder that combines the pages.
 * @version 2.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.combinePages = (pages, folder) => {
  if (pages.length <= 1) {
    console.log("Please provide at least 2 pages");
    return;
  }
  const path = "src/pages/";
  const _path = `${path}${folder}/`;
  let folders = [];
  pages.forEach((page) => {
    fs.readdirSync(path)
      .filter((f) => f === page)
      .forEach((f) => folders.push(f));
  });
  if (folders.length < screens.length) {
    console.log("Check if all of these pages exist");
    return;
  }
  if (!fs.existsSync(_path)) {
    fs.mkdirSync(_path);
  } else {
    console.log(`${_path} already exist`);
    console.log("Writing new files...");
  }
  folders.forEach((f) => {
    if (fs.existsSync(`${_path}${f}`)) {
      console.log(`${_path}${f}/ already exist`);
    } else {
      fs.rename(`${path}${f}/`, `${_path}${f}`, (err) => {
        if (err) {
          console.log(`Cannot move ${f} page`);
        } else {
          console.log(`${f} page moved to ${_path}`);
        }
      });
    }
  });
};
