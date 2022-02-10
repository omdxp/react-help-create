const fs = require("fs");

const p = JSON.parse(fs.readFileSync("./package.json", "utf8"));

p.name = `@omar-belghaouti/${p.name}`;

fs.writeFileSync("./package.json", JSON.stringify(p, null, 2));
