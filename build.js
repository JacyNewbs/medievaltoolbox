// Builds the tool pages: compiles each src/*.jsx (React JSX) into plain JavaScript in js/*.js,
// so browsers no longer have to download Babel and compile the page on every visit.
// Usage (needs Node.js):   npm install   then   node build.js
// Fontes data lives in fontes-data.js and needs no build step.
const fs = require("fs");
const path = require("path");
const Babel = require("@babel/standalone");

fs.mkdirSync("js", { recursive: true });
for (const file of fs.readdirSync("src").filter(f => f.endsWith(".jsx"))) {
  const source = fs.readFileSync(path.join("src", file), "utf8");
  const { code } = Babel.transform(source, { presets: ["react"], comments: false, compact: true, filename: file });
  const out = path.join("js", file.replace(/\.jsx$/, ".js"));
  fs.writeFileSync(out, "/* Built from src/" + file + " by build.js. Edit the source, not this file. */\n" + code + "\n");
  console.log("built", out, (code.length / 1024).toFixed(1) + " KB");
}
