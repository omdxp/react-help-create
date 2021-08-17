/**
 * @function createRedux
 * @description this function is used to create a redux implemenation.
 * @param {string} reduxName - the name of the redux implementation.
 * @param {boolean} js - if true, the javascript implementation will be created.
 * @param {boolean} ts - if true, the typescript implementation will be created.
 * @param {string} folder - the folder where the implementation will be created.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createRedux = (reduxName, js, ts, folder) => {
  console.log(`Creating redux ${reduxName} ${js} ${ts} ${folder}`);
};
