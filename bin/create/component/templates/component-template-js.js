/**
 * @function componentTemplateJs
 * @description this function is used to generate the component template js file.
 * @param {string} componentName - the name of the component.
 * @returns {string} the template js file.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.componentTemplateJs = (componentName) => {
  let component = componentName;
  component[0] = component[0].toUpperCase();
  return `// export ${component} component
const ${component} = () => {
    return <div>${component} component created!</div>;
}
export default ${component};
`;
};
