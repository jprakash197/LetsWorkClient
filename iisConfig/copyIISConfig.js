const fs = require("fs-extra");

const webConfigPath = "./dist/LETS-WORK-CLIENT/web.config";

if (fs.existsSync(webConfigPath)) {
  fs.unlinkSync(webConfigPath);
}

fs.copySync("./iisConfig/web.config", webConfigPath);
