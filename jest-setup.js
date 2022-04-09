global.console = {
  // eslint-disable-next-line no-undef
  log: jest.fn(), // console.log are ignored in tests
  // log: console.log,

  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  error: console.error,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};
