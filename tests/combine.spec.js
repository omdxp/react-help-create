const { combineComponents, combinePages } = require("../bin/combine");

describe("combine command tests", () => {
  test("should combine components", () => {
    combineComponents([], "");
  });
});
