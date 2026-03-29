import fs from "fs-extra";

fs.emptyDirSync("docs");
fs.copySync("dist", "docs");