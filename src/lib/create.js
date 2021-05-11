import path from 'path';
const chalk = require('chalk');
function createAction(appName) {
  const targetDir = path.resolve(process.cwd(), appName);
  const creator = new Creator(appName, targetDir);
  creator.create();
}

class Creator {
  constructor(appName, targetDir) {
    this.options = { appName, targetDir };
  }
  create() {
    console.log(chalk.blue(`You are using Node ${process.version}`));
    console.log('Created Succeed!', this.options);
  }
}
export default (...args) => {
  return createAction(...args);
};
