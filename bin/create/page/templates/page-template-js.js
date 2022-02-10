/**
 * @function pageTemplateJs
 * @description this function is used to generate the page template in javascript.
 * @param {string} pageName - the page name.
 * @returns {string} the page template in javascript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.pageTemplateJs = (pageName) => {
  return `import styles from './styles.css';

const ${pageName} = () => {
    return <div>${pageName} page created!</div>;
}
export default ${pageName};
`;
};
