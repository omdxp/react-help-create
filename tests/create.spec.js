const {
  createComponent,
  createConfig,
  createPage,
  createRedux,
} = require("../bin/create");

describe("create command test", () => {
  test("should create component", () => {
    createComponent("test", false, true, "", "");
  });
});
