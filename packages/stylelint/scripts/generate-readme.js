const fs = require('node:fs/promises');
const path = require('path');

const RULES_DIR = path.join(__dirname, '../rules');
const CONFIG_FILE = path.join(__dirname, '../.stylelintrc.js');
const MAIN_README_TEMPLATE = path.join(__dirname, '../templates/readme-root.template.md');
const MAIN_README_OUTPUT = path.join(__dirname, '../README.md');

async function generateMainReadme() {
  try {
    const config = require(CONFIG_FILE);
    const rulesConfig = config.rules;
    const ruleNames = Object.keys(rulesConfig);
    const mainReadmeTemplate = await fs.readFile(MAIN_README_TEMPLATE, 'utf8');

    let rulesDetails = '';

    for (const ruleName of ruleNames) {
      const ruleDirName = ruleName.replace('/', '-');
      const ruleReadmePath = path.join(RULES_DIR, ruleDirName, 'README.md');

      try {
        const ruleReadmeContent = await fs.readFile(ruleReadmePath, 'utf8');
        // Extract relevant info from rule README (customize this based on your template)
        const descriptionMatch = ruleReadmeContent.match(/# (.*?)\n/);
        const description = descriptionMatch ? descriptionMatch[1] : 'No description available.';
        const fixableMatch = ruleReadmeContent.includes('🔧 Fixable') ? 'Yes' : 'No';

        rulesDetails += `
### \`${ruleName}\`

* **Description:** ${description}
* **Configuration:** \`${JSON.stringify(rulesConfig[ruleName])}\`
* **Fixable:** ${fixableMatch}
* **[More Details](./rules/${ruleDirName}/README.md)
`;
      } catch (error) {
        console.warn(`Could not read README for ${ruleName}: ${error.message}`);
        rulesDetails += `
### \`${ruleName}\`

* **Configuration:** \`${JSON.stringify(rulesConfig[ruleName])}\`
* **[More Details](./rules/${ruleDirName}/README.md)
`;
      }
    }

    const mainReadmeContent = mainReadmeTemplate.replace('<!-- RULES_LIST -->', rulesDetails.trim());
    await fs.writeFile(MAIN_README_OUTPUT, mainReadmeContent);

    console.log('Main README.md generation complete!');
  } catch (error) {
    console.error('Error generating main README:', error);
  }
}

generateMainReadme();
