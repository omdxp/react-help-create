/**
 * @function pageTemplateTs
 * @description this function is used to generate the page template in typescript.
 * @param {string} pageName - the page name.
 * @returns {string} the page template in typescript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.pageTemplateTs = (pageName) => {
  return `import { FC } from "react";
import styles from "./styles.css";

interface ${pageName}Props {}

const ${pageName}: FC<${pageName}Props> = ({}: ${pageName}Props): JSX.Element => {
    return <div>${pageName} page created!</div>;
}
export default ${pageName};
`;
};
