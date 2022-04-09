const {
  createComponent,
  createConfig,
  createPage,
  createRedux,
} = require("../bin/create");

const fs = require("file-system");

function fail(reason = "fail was called in a test.") {
  throw new Error(reason);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("create component tests", () => {
  console.log = jest.fn();
  test("should create ts component", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createComponent("test", false, true, "", "");
      await sleep(1000);
      expect(fs.existsSync("./src/components/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/components/test/styles.css")).toBe(true);
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });

  test("should create js component", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createComponent("test", true, false, "", "");
      await sleep(1000);
      expect(fs.existsSync("./src/components/test/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/components/test/styles.css")).toBe(true);
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });

  test("should create ts component in a folder", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createComponent("test", false, true, "folder", "");
      await sleep(1000);
      expect(fs.existsSync("./src/components/folder/test/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test/styles.css")).toBe(
        true
      );
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });

  test("should create js component in a folder", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createComponent("test", true, false, "folder", "");
      await sleep(1000);
      expect(fs.existsSync("./src/components/folder/test/index.jsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test/styles.css")).toBe(
        true
      );
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed component", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createComponent("test", false, true, "", "");
      await sleep(1000);
      createComponent("test", false, true, "", "");
      await sleep(1000);
      expect(console.log).lastCalledWith(
        "./src/components/test/index.tsx already exist"
      );
      expect(fs.existsSync("./src/components/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/components/test/styles.css")).toBe(true);
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed component in a folder", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createComponent("test", false, true, "folder", "");
      await sleep(1000);
      createComponent("test", false, true, "folder", "");
      await sleep(1000);
      expect(console.log).lastCalledWith(
        "./src/components/folder/test/index.tsx already exist"
      );
      expect(fs.existsSync("./src/components/folder/test/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test/styles.css")).toBe(
        true
      );
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });
});

describe("create page tests", () => {
  console.log = jest.fn();
  test("should create ts page", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createPage("test", false, true, "", "");
      await sleep(1000);
      expect(fs.existsSync("./src/pages/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/pages/test/styles.css")).toBe(true);
      expect(fs.existsSync("./src/pages/test/functions/index.ts")).toBe(true);
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });

  test("should create js page", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createPage("test", true, false, "", "");
      await sleep(1000);
      expect(fs.existsSync("./src/pages/test/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/pages/test/styles.css")).toBe(true);
      expect(fs.existsSync("./src/pages/test/functions/index.js")).toBe(true);
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });

  test("should create ts page in a folder", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createPage("test", false, true, "folder", "");
      await sleep(1000);
      expect(fs.existsSync("./src/pages/folder/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test/styles.css")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test/functions/index.ts")).toBe(
        true
      );
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });

  test("should create js page in a folder", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createPage("test", true, false, "folder", "");
      await sleep(1000);
      expect(fs.existsSync("./src/pages/folder/test/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test/styles.css")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test/functions/index.js")).toBe(
        true
      );
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed page", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createPage("test", false, true, "", "");
      await sleep(1000);
      createPage("test", false, true, "", "");
      await sleep(1000);
      expect(console.log).lastCalledWith("./src/pages/test/ already exist");
      expect(fs.existsSync("./src/pages/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/pages/test/styles.css")).toBe(true);
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed page in a folder", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createPage("test", false, true, "folder", "");
      await sleep(1000);
      createPage("test", false, true, "folder", "");
      await sleep(1000);
      expect(console.log).lastCalledWith(
        "./src/pages/folder/test/ already exist"
      );
      expect(fs.existsSync("./src/pages/folder/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/pages/folder/test/styles.css")).toBe(true);
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });
});

describe("create redux tests", () => {
  console.log = jest.fn();
  test("should create redux in ts", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createRedux(false, true);
      await sleep(1000);
      expect(fs.existsSync("./src/redux/index.ts")).toBe(true);
      expect(fs.existsSync("./src/redux/actions/general/index.ts")).toBe(true);
      expect(fs.existsSync("./src/redux/reducers/index.ts")).toBe(true);
      expect(fs.existsSync("./src/redux/reducers/general/index.ts")).toBe(true);
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });

  test("should create redux in js", async () => {
    try {
      fs.existsSync("src") && fs.rmdirSync("src");
      createRedux(true, false);
      await sleep(1000);
      expect(fs.existsSync("./src/redux/index.js")).toBe(true);
      expect(fs.existsSync("./src/redux/actions/general/index.js")).toBe(true);
      expect(fs.existsSync("./src/redux/reducers/index.js")).toBe(true);
      expect(fs.existsSync("./src/redux/reducers/general/index.js")).toBe(true);
      fs.rmdirSync("src");
    } catch (err) {
      fail(err);
    }
  });
});
