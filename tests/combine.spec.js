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
    } catch (err) {
      fail(err);
    }
  });
});

describe("combine pages tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  console.log = jest.fn();
  test("should combine pages", async () => {
    try {
      createPage("test1", false, true, "", "");
      await sleep(100);
      createPage("test2", false, true, "", "");
      await sleep(100);
      combinePages(["test1", "test2"], "folder");
      await sleep(100);
      expect(fs.existsSync("./src/pages/folder/test1/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test1/styles.css")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test1/functions/index.ts")).toBe(
        true
      );
      expect(fs.existsSync("./src/pages/folder/test2/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test2/styles.css")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test2/functions/index.ts")).toBe(
        true
      );
      deletePages(["test1", "test2"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not combine not existed pages", async () => {
    try {
      createPage("test3", false, true, "", "");
      await sleep(100);
      combinePages(["test1", "test2"], "folder");
      await sleep(100);
      expect(console.log).lastCalledWith("Check if all of these pages exist");
      deletePages(["test3"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should combine at least 2 pages", async () => {
    try {
      combinePages(["test1"], "folder");
      await sleep(100);
      expect(console.log).lastCalledWith("Please provide at least 2 pages");
    } catch (err) {
      fail(err);
    }
  });
});
