const utils = require('./utils');
const config = require('./config');

module.exports = function preDeploy() {
  const pkg = utils.readPackageJSON();
  const modified = Object.assign({}, pkg, {
    name: utils.getExpPublishName(pkg.name, config),
    privacy: 'unlisted'
  });

  utils.writePackageJSON(modified);
};
