// Compiles src/*.jsx into js/*.js. Run: npm install, then node build.js
const fs = require("fs");
const path = require("path");
const Babel = require("@babel/standalone");

fs.mkdirSync("js", { recursive: true });
for (const file of fs.readdirSync("src").filter(f => f.endsWith(".jsx"))) {
  const source = fs.readFileSync(path.join("src", file), "utf8");
  const { code } = Babel.transform(source, { presets: ["react"], comments: false, compact: true, filename: file });
  const out = path.join("js", file.replace(/\.jsx$/, ".js"));
  fs.writeFileSync(out, "/* Compiled from src/" + file + " */\n" + code + "\n");
  console.log("built", out, (code.length / 1024).toFixed(1) + " KB");
}
