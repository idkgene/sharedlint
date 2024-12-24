const fs = require('node:fs/promises');
const path = require('path');

const RULES_DIR = path.join(__dirname, '../rules');
const CONFIG_FILE = path.join(__dirname, '../.stylelintrc.js');
const TEMPLATE_FILE = path.join(__dirname, '../templates/test.template.js');
const README_TEMPLATE = path.join(__dirname, '../templates/readme.template.md');

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function generateReadme(ruleName, ruleConfig, targetDir) {
  const readmeTemplate = await fs.readFile(README_TEMPLATE, 'utf8');
  const readmeContent = readmeTemplate
    .replace(/RULE_NAME/g, ruleName)
    .replace(/RULE_CONFIG/g, JSON.stringify(ruleConfig, null, 2));
  
  await fs.writeFile(path.join(targetDir, 'README.md'), readmeContent);
}

async function generateTestFile(ruleName, ruleDir) {
  const templateContent = await fs.readFile(TEMPLATE_FILE, 'utf8');
  const testContent = templateContent.replace(/RULE_NAME/g, ruleName);
  await fs.writeFile(path.join(ruleDir, 'rule.test.js'), testContent);
}

async function generateRuleStructure() {
  try {
    const config = require(CONFIG_FILE);
    const rules = Object.entries(config.rules);

    for (const [ruleName, ruleConfig] of rules) {
      const dirName = ruleName.replace('/', '-');
      const ruleDir = path.join(RULES_DIR, dirName);
      const fixturesDir = path.join(ruleDir, 'fixtures');

      await ensureDirectoryExists(ruleDir);
      await ensureDirectoryExists(fixturesDir);

      await generateTestFile(ruleName, ruleDir);
      await generateReadme(ruleName, ruleConfig, ruleDir);

      const validFile = path.join(fixturesDir, 'valid.scss');
      const invalidFile = path.join(fixturesDir, 'invalid.scss');
      
      await fs.writeFile(validFile, '', { flag: 'wx' }).catch(() => {});
      await fs.writeFile(invalidFile, '', { flag: 'wx' }).catch(() => {});

      console.log(`Generated structure for ${ruleName}`);
    }

    console.log('Generation complete!');
  } catch (error) {
    console.error('Error generating tests:', error);
  }
}

generateRuleStructure();
