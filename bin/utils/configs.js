let config = {
  withCSS: true, // if true, create styles.css file for components and pages, if false, don't create styles.css file
  withFunctions: true, // if true, create functions folder for pages, if false, don't create functions folder
  withProps: true, // if true, create props interface for components and pages (in TS only), if false, don't create props interface
  defaultExports: true, // if true, create default export for components and pages, if false, create named export for components and pages
  componentsRoot: "./src/components", // path to components folder
  pagesRoot: "./src/pages", // path to pages folder
  reduxRoot: "./src/redux", // path to redux folder
};

exports.config = config;
