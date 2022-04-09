const { combineComponents, combinePages } = require("../bin/combine");
const { createComponent, createPage } = require("../bin/create");
const { deleteComponents, deletePages } = require("../bin/delete");
const { sleep, fail, clear } = require("./utils");

const fs = require("file-system");

describe("combine components tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  console.log = jest.fn();
  test("should combine components", async () => {
    try {
      createComponent("test1", false, true, "", "");
      await sleep(100);
      createComponent("test2", false, true, "", "");
      await sleep(100);
      combineComponents(["test1", "test2"], "folder");
      await sleep(100);
      expect(fs.existsSync("./src/components/folder/test1/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test1/styles.css")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test2/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test2/styles.css")).toBe(
        true
      );
      deleteComponents(["test1", "test2"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not combine not existed components", async () => {
    try {
      createComponent("test3", false, true, "", "");
      await sleep(100);
      combineComponents(["test1", "test2"], "folder");
      await sleep(100);
      expect(console.log).lastCalledWith(
        "Check if all of these components exist"
      );
      deleteComponents(["test3"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should combine at least 2 components", async () => {
    try {
      combineComponents(["test1"], "folder");
      await sleep(100);
      expect(console.log).lastCalledWith(
        "Please provide at least 2 components"
      );
      deleteComponents(["test1"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});
