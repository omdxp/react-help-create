const {
  deleteComponents,
  deleteConfig,
  deletePages,
  deleteRedux,
} = require("../bin/delete");

describe("delete command tests", () => {
  test("should delete component", () => {
    deleteComponents([], "");
  });
});
