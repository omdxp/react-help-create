/**
 * @function componentTemplateTs
 * @description this function is used to generate the component template ts file.
 * @param {string} componentName - the name of the component.
 * @returns {string} the template ts file.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.componentTemplateTs = (componentName) => {
  return `import { FC } from "react";
import "./styles.css";

interface ${componentName}Props {}

const ${componentName}: FC<${componentName}Props> = ({}: ${componentName}Props) => {
    return <div>${componentName} component created!</div>;
}
export default ${componentName};
`;
};
