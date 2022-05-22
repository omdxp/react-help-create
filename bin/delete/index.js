const { deleteComponents } = require("./component");
const { deletePages } = require("./page");
const { deleteRedux, deleteReducers, deleteActions } = require("./redux");
const { deleteConfig } = require("./config");

exports.deleteComponents = deleteComponents;
exports.deletePages = deletePages;
exports.deleteRedux = deleteRedux;
exports.deleteReducers = deleteReducers;
exports.deleteActions = deleteActions;
exports.deleteConfig = deleteConfig;
