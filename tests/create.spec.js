const {
  createComponent,
  createConfig,
  createPage,
  createRedux,
  createReducer,
  createAction,
} = require("../bin/create");
const {
  deleteComponents,
  deleteConfig,
  deletePages,
  deleteRedux,
  deleteReducers,
  deleteActions,
} = require("../bin/delete");

const fs = require("file-system");

const { sleep, fail, clear } = require("./utils");

describe("create component tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  test("should create ts component", async () => {
    try {
      createComponent("test1", false, true, "", "");
      await sleep(100);
      expect(fs.existsSync("./src/components/test1/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/components/test1/styles.css")).toBe(true);
      deleteComponents(["test1"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js component", async () => {
    try {
      createComponent("test2", true, false, "", "");
      await sleep(100);
      expect(fs.existsSync("./src/components/test2/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/components/test2/styles.css")).toBe(true);
      deleteComponents(["test2"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create ts component in a folder", async () => {
    try {
      createComponent("test3", false, true, "folder", "");
      await sleep(100);
      expect(fs.existsSync("./src/components/folder/test3/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test3/styles.css")).toBe(
        true
      );
      deleteComponents(["test3"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js component in a folder", async () => {
    try {
      createComponent("test4", true, false, "folder", "");
      await sleep(100);
      expect(fs.existsSync("./src/components/folder/test4/index.jsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test4/styles.css")).toBe(
        true
      );
      deleteComponents(["test4"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed component", async () => {
    try {
      createComponent("test5", false, true, "", "");
      await sleep(100);

      expect(fs.existsSync("./src/components/test5/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/components/test5/styles.css")).toBe(true);
      deleteComponents(["test5"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed component in a folder", async () => {
    try {
      createComponent("test6", false, true, "folder", "");
      await sleep(100);

      expect(fs.existsSync("./src/components/folder/test6/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test6/styles.css")).toBe(
        true
      );
      deleteComponents(["test6"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});

describe("create page tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  test("should create ts page", async () => {
    try {
      createPage("test", false, true, "", "");
      await sleep(100);
      expect(fs.existsSync("./src/pages/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/pages/test/styles.css")).toBe(true);
      expect(fs.existsSync("./src/pages/test/functions/index.ts")).toBe(true);
      deletePages(["test"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js page", async () => {
    try {
      createPage("test", true, false, "", "");
      await sleep(100);
      expect(fs.existsSync("./src/pages/test/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/pages/test/styles.css")).toBe(true);
      expect(fs.existsSync("./src/pages/test/functions/index.js")).toBe(true);
      deletePages(["test"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create ts page in a folder", async () => {
    try {
      createPage("test", false, true, "folder", "");
      await sleep(100);
      expect(fs.existsSync("./src/pages/folder/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test/styles.css")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test/functions/index.ts")).toBe(
        true
      );
      deletePages(["test"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js page in a folder", async () => {
    try {
      createPage("test", true, false, "folder", "");
      await sleep(100);
      expect(fs.existsSync("./src/pages/folder/test/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test/styles.css")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test/functions/index.js")).toBe(
        true
      );
      deletePages(["test"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed page", async () => {
    try {
      createPage("test", false, true, "", "");
      await sleep(100);
      expect(fs.existsSync("./src/pages/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/pages/test/styles.css")).toBe(true);
      expect(fs.existsSync("./src/pages/test/functions/index.ts")).toBe(true);
      deletePages(["test"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed page in a folder", async () => {
    try {
      createPage("test", false, true, "folder", "");
      await sleep(100);

      expect(fs.existsSync("./src/pages/folder/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test/styles.css")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test/functions/index.ts")).toBe(
        true
      );
      deletePages(["test"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});

describe("create redux tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  test("should create redux in ts", async () => {
    try {
      createRedux(false, true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/index.ts")).toBe(true);
      expect(fs.existsSync("./src/redux/actions/general/index.ts")).toBe(true);
      expect(fs.existsSync("./src/redux/reducers/index.ts")).toBe(true);
      expect(fs.existsSync("./src/redux/reducers/general/index.ts")).toBe(true);
      deleteRedux();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create redux in js", async () => {
    try {
      createRedux(true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/index.js")).toBe(true);
      expect(fs.existsSync("./src/redux/actions/general/index.js")).toBe(true);
      expect(fs.existsSync("./src/redux/reducers/index.js")).toBe(true);
      expect(fs.existsSync("./src/redux/reducers/general/index.js")).toBe(true);
      deleteRedux();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});

describe("create config tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  test("should create config file", async () => {
    try {
      createConfig();
      await sleep(100);
      expect(fs.existsSync("rhc.config.json")).toBe(true);
      deleteConfig();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed config file", async () => {
    try {
      createConfig();
      await sleep(100);
      expect(fs.existsSync("rhc.config.json")).toBe(true);
      deleteConfig();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});

describe("create action tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  test("should not create action if redux implementation does not exist", async () => {
    try {
      createAction(["test", "test-action"], false, true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/test-action.ts")).toBe(
        false
      );
    } catch (err) {
      fail(err);
    }
  });

  test("should not create action if reducer does not exist", async () => {
    try {
      createRedux(false, true);
      await sleep(100);
      createAction(["test", "test-action"], false, true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/test-action.ts")).toBe(
        false
      );
      deleteRedux();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should creact action for existed reducer", async () => {
    try {
      createRedux(false, true);
      await sleep(100);
      createReducer("test", false, true);
      createAction(["test", "test-action"], false, true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/test-action.ts")).toBe(
        true
      );
      deleteRedux();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create multiple actions for existed reducer", async () => {
    try {
      createRedux(false, true);
      await sleep(100);
      createReducer("test", false, true);
      createAction(["test", "test-action", "test-action-2"], false, true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/test-action.ts")).toBe(
        true
      );
      expect(fs.existsSync("./src/redux/actions/test/test-action-2.ts")).toBe(
        true
      );
      deleteRedux();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});

describe("create reducer tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });

  test("should not create reducer if redux implementation does not exist", async () => {
    try {
      createReducer("test", false, true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should create reducer for existed redux implementation", async () => {
    try {
      createRedux(false, true);
      await sleep(100);
      createReducer("test", false, true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(true);
      deleteRedux();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});
