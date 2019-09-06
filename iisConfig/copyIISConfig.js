const fs = require("fs-extra");

const webConfigPath = "./dist/letsWork/web.config";

if (fs.existsSync(webConfigPath)) {
  fs.unlinkSync(webConfigPath);
}

fs.copySync("./iisConfig/web.config", webConfigPath);
