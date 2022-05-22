const { deleteComponents } = require("./component");
const { deletePages } = require("./page");
const { deleteRedux, deleteReducers } = require("./redux");
const { deleteConfig } = require("./config");

exports.deleteComponents = deleteComponents;
exports.deletePages = deletePages;
exports.deleteRedux = deleteRedux;
exports.deleteReducers = deleteReducers;
exports.deleteConfig = deleteConfig;
