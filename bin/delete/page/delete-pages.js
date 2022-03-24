const fs = require("file-system");
const { config } = require("../../utils");

/**
 * @function deletePages
 * @description this function is used to delete pages that exists.
 * @param {Array} pages - array of pages that are going to be deleted.
 * @param {string} folder - the folder of the pages.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deletePages = (pages, folder) => {
  const { pagesRoot } = config;
  const path = folder === "" ? `${pagesRoot}/` : `${pagesRoot}/${folder}/`;
  if (pages.length === 0 && folder !== "") {
    try {
      fs.rmdirSync(path);
      console.log(`${path} deleted`);
    } catch (err) {
      console.log(`${path} does not exist`);
    }
    return;
  }
  pages.forEach((page) => {
    const _path = `${path}${page}`;
    try {
      fs.rmdirSync(_path);
      console.log(`${_path} deleted`);
    } catch (err) {
      console.log(`${_path} does not exist`);
    }
  });
};
