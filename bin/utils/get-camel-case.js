/**
 * @function getCamelCase
 * @description Get the camel case of a string.
 * @param {string} name - name of the string.
 * @example getReducerName("gates-of-galoo");
 * @returns {string} "gatesOfGaloo"
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.getCamelCase = (name) => {
  return name
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};
