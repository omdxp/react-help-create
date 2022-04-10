const fs = require("file-system");
const { defaultConfigTemplate } = require("../templates");

/**
 * @function createConfig
 * @description this function is used to create the config file.
 * @version 1.0.0
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createConfig = () => {
  if (fs.existsSync("./rhc.config.json")) {
    console.log("rhc.config.json already exist");
    return;
  }
  fs.writeFile("./rhc.config.json", defaultConfigTemplate(), (err) => {
    if (err) {
      console.log("Unable to create rhc.config.json");
    } else {
      console.log("rhc.config.json created");
    }
  });
};
