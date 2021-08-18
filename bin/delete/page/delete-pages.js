const { fs } = require("file-system");

/**
 * @function deletePages
 * @description this function is used to delete pages that exists.
 * @param {Array} pages - array of pages that are going to be deleted.
 * @param {string} folder - the folder of the pages.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deletePages = (pages, folder) => {
  if (pages.length === 0 && folder !== "") {
    const path = `src/pages/${folder}/`;
    try {
      fs.rmdirSync(path);
      console.log(`${path} deleted`);
    } catch (err) {
      console.log(`${path} does not exist`);
    }
  }
  pages.forEach((page) => {
    const path =
      folder === ""
        ? `src/pages/${page.toLowerCase()}/`
        : `src/pages/${folder}/${page.toLowerCase()}`;
    try {
      fs.rmdirSync(path);
      console.log(`${path} deleted`);
    } catch (err) {
      console.log(`${path} does not exist`);
    }
  });
};
