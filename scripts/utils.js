const fs = require('fs');

function getExpPublishName(packageName, config) {
  if (config.expSlug)
    return `${config.expSlug}`.replace(/[^a-zA-Z0-9\\-]/, '-');
  else
    return `${packageName}-${config.branchName}`.replace(/[^a-zA-Z0-9\\-]/, '-');
}

function readPackageJSON() {
  return JSON.parse(fs.readFileSync('./package.json'));
}

function writePackageJSON(content) {
  fs.writeFileSync('./package.json', JSON.stringify(content, null, 2));
}

module.exports = {
  getExpPublishName,
  readPackageJSON,
  writePackageJSON
};
