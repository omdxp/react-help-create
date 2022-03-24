/**
 * @function componentTemplateTs
 * @description this function is used to generate the component template ts file.
 * @param {string} componentName - the name of the component.
 * @param {boolean} withCSS - if the component has css.
 * @param {boolean} defaultExports - if the component is a default export.
 * @param {boolean} withProps - if the component has props.
 * @returns {string} the template ts file.
 * @version 1.1.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.componentTemplateTs = (
  componentName,
  withCSS,
  defaultExports,
  withProps
) => {
  let str = `import { FC } from "react";
`;
  if (withCSS) {
    str += `import "./styles.css";
`;
  }
  if (withProps) {
    str += `
interface ${componentName}Props {}
`;
  }
  if (defaultExports) {
    str += `
const ${componentName}: FC${withProps ? `<${componentName}Props>` : ""} = (${
      withProps ? `{}: ${componentName}Props` : ""
    }) => {
  return <div>${componentName} component created!</div>;
};
export default ${componentName};
`;
  } else {
    str += `
export const ${componentName}: FC${
      withProps ? `<${componentName}Props>` : ""
    } = (${withProps ? `{}: ${componentName}Props` : ""}) => {
  return <div>${componentName} component created!</div>;
};
`;
  }
  return str;
};
