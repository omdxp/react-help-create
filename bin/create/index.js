const { createComponent } = require("./component/functions");
const {
  componentTemplateJs,
  componentTemplateTs,
} = require("./component/templates");

const { createPage } = require("./page/functions");
const { pageTemplateJs, pageTemplateTs } = require("./page/templates");

const { createRedux } = require("./redux/functions");
const { reduxTemplateJs, reduxTemplateTs } = require("./redux/templates");

exports.createComponent = createComponent;
exports.componentTemplateJs = componentTemplateJs;
exports.componentTemplateTs = componentTemplateTs;
exports.createPage = createPage;
exports.pageTemplateJs = pageTemplateJs;
exports.pageTemplateTs = pageTemplateTs;
exports.createRedux = createRedux;
exports.reduxTemplateJs = reduxTemplateJs;
exports.reduxTemplateTs = reduxTemplateTs;
