const { execSync } = require("child_process");
const fs = require("fs");

// timestamp folder
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const reportDir = `allure-history/allure-report-${timestamp}`;

// ensure base folder exists
if (!fs.existsSync('allure-history')) fs.mkdirSync('allure-history');

// generate allure report from latest results
execSync(`allure generate allure-results --clean -o ${reportDir}`, { stdio: "inherit" });

console.log(`✔ Report saved at: ${reportDir}`);
console.log(`To open it: allure open ${reportDir}`);
