const { createComponent } = require("./component/functions");
const { createPage } = require("./page/functions");
const { createRedux, createReducer } = require("./redux/functions");
const { createConfig } = require("./config/functions");

exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createRedux = createRedux;
exports.createReducer = createReducer;
exports.createConfig = createConfig;
