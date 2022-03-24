const fs = require("file-system");

/**
 * @function deleteConfig
 * @description this function is used to delete the config file.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteConfig = () => {
  if (fs.existsSync("./rhc.config.json")) {
    fs.unlinkSync("./rhc.config.json");
    console.log("rhc.config.json deleted");
  } else {
    console.log("rhc.config.json does not exist");
  }
};
