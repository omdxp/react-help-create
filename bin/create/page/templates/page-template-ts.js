/**
 * @function pageTemplateTs
 * @description this function is used to generate the page template in typescript.
 * @param {string} pageName - the page name.
 * @returns {string} the page template in typescript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.pageTemplateTs = (pageName) => {
  let page = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  return `import { FC } from "react";

// define ${page} props interface
interface ${page}Props {}

// export ${page} page
const ${page}: FC<${page}Props> = ({}: ${page}Props): JSX.Element => {
    return <div>${page} page created!</div>;
}
export default ${page};
`;
};
