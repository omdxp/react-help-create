/**
 * @function componentTemplateJs
 * @description this function is used to generate the component template js file.
 * @param {string} componentName - the name of the component.
 * @returns {string} the template js file.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.componentTemplateJs = (componentName) => {
  return `import styles from './styles.css';

const ${componentName} = () => {
    return <div>${componentName} component created!</div>;
}
export default ${componentName};
`;
};
