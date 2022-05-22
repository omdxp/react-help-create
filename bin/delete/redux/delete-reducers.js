const fs = require("file-system");
const { config, getCamelCase } = require("../../utils");

/**
 * @function deleteReducers
 * @description this function is used to delete reducers that exists.
 * @param {Array<string>} reducers - array of reducers to be deleted.
 * @param {boolean} ts - if project is written in typescript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteReducers = (reducers, ts) => {
  const { reduxRoot } = config;
  const path = `${reduxRoot}/reducers/`;
  const fileExtension = ts ? "ts" : "js";
  const data = fs.readFileSync(`${reduxRoot}/reducers/index.${fileExtension}`, {
    encoding: "utf8",
    flag: "r",
  });
  let result = data;
  if (reducers.length === 0) {
    let existedReducers = fs
      .readdirSync(path)
      .filter((el) => !el.endsWith(`.${fileExtension}`));
    if (existedReducers.length === 0) {
      console.log("no reducer found");
      return;
    }
    reducers = existedReducers;
  }
  reducers.forEach((r) => {
    const _path = `${path}${r}/`;
    try {
      fs.rmdirSync(_path);
      // update index.js that imports reducer and exports combineReducers
      if (
        new RegExp(
          `import[. \t]*{[. \t]*${getCamelCase(
            r
          )}[. \t]*}[. \t]*from[. \t]*['"\`]./${r}['"\`]`
        ).test(data)
      ) {
        // delete import statement
        result = result.replace(
          new RegExp(
            `import[. \t]*{[. \t]*${getCamelCase(
              r
            )}[. \t]*}[. \t]*from[. \t]*['"\`]./${r}['"\`][.;]`
          ),
          ""
        );
        result = result.replace(new RegExp(`${r}[. \t\n]*,`), "");
      }
      console.log(`${_path} deleted`);
    } catch (err) {
      console.log(`${_path} does not exist`);
    }
  });
  fs.fs.writeFileSync(
    `${reduxRoot}/reducers/index.${fileExtension}`,
    result.replace(/\n\s*\n/g, "\n").replace(/export/g, "\nexport"),
    {
      encoding: "utf8",
      flag: "w",
    }
  );
};
