/**
 * @function pageTemplateTs
 * @description this function is used to generate the page template in typescript.
 * @param {string} pageName - the page name.
 * @param {boolean} withCSS - if the page has css.
 * @param {boolean} defaultExports - if the page is a default export.
 * @param {boolean} withProps - if the page has props.
 * @returns {string} the page template in typescript.
 * @version 1.1.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.pageTemplateTs = (pageName, withCSS, defaultExports, withProps) => {
  let str = `import { FC } from "react";
`;
  if (withCSS) {
    str += `import "./styles.css";
`;
  }
  if (withProps) {
    str += `
interface ${pageName}Props {}
`;
  }
  if (defaultExports) {
    str += `
const ${pageName}: FC${withProps ? `<${pageName}Props>` : ""} = (${
      withProps ? `{}: ${pageName}Props` : ""
    }) => {
    return <div>${pageName} page created!</div>;
};
export default ${pageName};
`;
  } else {
    str += `
export const ${pageName}: FC${withProps ? `<${pageName}Props>` : ""} = (${
      withProps ? `{}: ${pageName}Props` : ""
    }) => {
    return <div>${pageName} page created!</div>;
};
`;
  }
  return str;
};
