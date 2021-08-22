/**
 * @function pageTemplateJs
 * @description this function is used to generate the page template in javascript.
 * @param {string} pageName - the page name.
 * @returns {string} the page template in javascript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.pageTemplateJs = (pageName) => {
  let page = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  return `// export ${page} page
const ${page} = () => {
    return <div>${page} page created!</div>;
}
export default ${page};
`;
};
