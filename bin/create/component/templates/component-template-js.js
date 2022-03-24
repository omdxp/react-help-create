/**
 * @function componentTemplateJs
 * @description this function is used to generate the component template js file.
 * @param {string} componentName - the name of the component.
 * @param {boolean} withCSS - if the component has css.
 * @param {boolean} defaultExports - if the component is a default export.
 * @returns {string} the template js file.
 * @version 1.1.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.componentTemplateJs = (componentName, withCSS, defaultExports) => {
  let str = "";
  if (withCSS) {
    str += `import "./styles.css";
`;
  }
  if (defaultExports) {
    str += `
const ${componentName} = () => {
  return <div>${componentName} component created!</div>;
};
export default ${componentName};
`;
  } else {
    str += `
export const ${componentName} = () => {
  return <div>${componentName} component created!</div>;
};
`;
  }
  return str;
};
