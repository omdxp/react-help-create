/**
 * @function createComponent
 * @description this function is used to create a component.
 * @param {string} componentName - the name of the component.
 * @param {boolean} js - if the component is a javascript component.
 * @param {boolean} ts - if the component is a typescript component.
 * @param {string} folder - the folder of the component.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
export const createComponent = (componentName, js, ts, folder) => {
  console.log(`Creating component ${componentName} ${js} ${ts} ${folder}`);
};
