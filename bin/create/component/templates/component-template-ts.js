/**
 * @function componentTemplateTs
 * @description this function is used to generate the component template ts file.
 * @param {string} componentName - the name of the component.
 * @returns {string} the template ts file.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.componentTemplateTs = (componentName) => {
  let component =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);
  return `import { FC } from "react";

// define ${component} props interface
interface ${component}Props {}

// export ${component} component
const ${component}: FC<${component}Props> = ({}: ${component}Props): JSX.Element => {
    return <div>${component} component created!</div>;
}
export default ${component};
`;
};
