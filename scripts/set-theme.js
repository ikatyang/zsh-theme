const fs = require('fs');
const os = require('os');
const path = require('path');

try {

  if (process.argv.length < 3) {
    console.log('Usage: node /path/to/set-theme.js <theme-name>');
    throw new Error(`Require specified theme name`);
  }

  const theme_name = process.argv[2];

  const encoding = 'utf8';
  const theme_regex = /^ZSH_THEME="[\s\S]+?"$/m;
  const zshrc_path = path.join(os.homedir(), '.zshrc');

  const zshrc = fs.readFileSync(zshrc_path, encoding);

  if (!theme_regex.test(zshrc)) {
    throw new Error(`Missing ZSH_THEME field in ${zshrc_path}`);
  }

  const new_zshrc = zshrc.replace(theme_regex, `ZSH_THEME="${theme_name}"`);
  fs.writeFileSync(zshrc_path, new_zshrc, { encoding });

  console.log(`Successfully set ZSH_THEME as ${theme_name}`);
  process.exit(0);

} catch (error) {

  console.log(`Error: ${error.message}`);
  process.exit(1);
}
