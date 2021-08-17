/**
 * @function createPage
 * @description this function is used to create a page.
 * @param {string} pageName - the name of the page.
 * @param {boolean} js - if the page is a javascript page.
 * @param {boolean} ts - if the page is a typescript page.
 * @param {string} folder - the folder of the page.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createPage = (pageName, js, ts, folder) => {
  console.log(`Creating page: ${pageName} ${js} ${ts} ${folder}`);
};
