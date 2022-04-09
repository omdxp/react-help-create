const {
  deleteComponents,
  deleteConfig,
  deletePages,
  deleteRedux,
} = require("../bin/delete");

const {
  createComponent,
  createConfig,
  createPage,
  createRedux,
} = require("../bin/create");

const { fail, sleep, clear } = require("./utils");

const fs = require("file-system");

describe("delete component tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  console.log = jest.fn();
  test("should delete component", async () => {
    try {
      deleteComponents(["del-test"], "");
      await sleep(100);
      createComponent("del-test", false, true, "", "");
      await sleep(100);
      deleteComponents(["del-test"], "");
      await sleep(100);
      expect(fs.existsSync("./src/components/del-test/index.tsx")).toBe(false);
      expect(fs.existsSync("./src/components/del-test/styles.css")).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should not delete not existed component", async () => {
    try {
      deleteComponents(["del-test"], "");
      await sleep(100);
      deleteComponents(["del-test"], "");
      await sleep(100);
      expect(console.log).lastCalledWith(
        "./src/components/del-test/ does not exist"
      );
    } catch (err) {
      fail(err);
    }
  });
});

describe("delete page tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  console.log = jest.fn();

  test("should delete page", async () => {
    try {
      deletePages(["del-test"], "");
      await sleep(100);
      createPage("del-test", false, true, "", "");
      await sleep(100);
      deletePages(["del-test"], "");
      await sleep(100);
      expect(fs.existsSync("./src/pages/del-test/index.tsx")).toBe(false);
      expect(fs.existsSync("./src/pages/del-test/styles.css")).toBe(false);
      expect(fs.existsSync("./src/pages/del-test/functions/index.ts")).toBe(
        false
      );
    } catch (err) {
      fail(err);
    }
  });

  test("should not delete not existed page", async () => {
    try {
      deletePages(["del-test"], "");
      await sleep(100);
      deletePages(["del-test"], "");
      await sleep(100);
      expect(console.log).lastCalledWith("./src/pages/del-test does not exist");
    } catch (err) {
      fail(err);
    }
  });
});

describe("delete config tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  console.log = jest.fn();
  test("should delete config", async () => {
    try {
      deleteConfig();
      await sleep(100);
      createConfig();
      await sleep(100);
      deleteConfig();
      await sleep(100);
      expect(fs.existsSync("rhc.config.json")).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should not delete not existed config", async () => {
    try {
      deleteConfig();
      await sleep(100);
      deleteConfig();
      await sleep(100);
      expect(fs.existsSync("rhc.config.json")).toBe(false);
      expect(console.log).lastCalledWith("rhc.config.json does not exist");
    } catch (err) {
      fail(err);
    }
  });
});

describe("delete redux tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  console.log = jest.fn();
  test("should delete redux", async () => {
    try {
      deleteRedux();
      await sleep(100);
      createRedux(false, true);
      await sleep(100);
      deleteRedux();
      await sleep(100);
      expect(fs.existsSync("src/redux/")).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should not delete not existed redux", async () => {
    try {
      deleteRedux();
      await sleep(100);
      deleteRedux();
      await sleep(100);
      expect(fs.existsSync("src/redux/")).toBe(false);
      expect(console.log).lastCalledWith("./src/redux/ does not exist");
    } catch (err) {
      fail(err);
    }
  });
});
