import { execSync } from 'child_process';
import fs from 'fs';

export default async function globalTeardown() {
  // timestamp folder name
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const reportDir = `allure-history/allure-report-${timestamp}`;

  // ensure base folder exists
  if (!fs.existsSync('allure-history')) {
    fs.mkdirSync('allure-history');
  }

  // generate Allure report from latest allure-results
  execSync('node save-allure-report.ts', { stdio: 'inherit' });

  console.log(`\n✔ Report saved at: ${reportDir}`);
  console.log(`\nTo open it:\nallure open ${reportDir}\n`);
}
