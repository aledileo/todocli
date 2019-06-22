const { Command } = require('@oclif/command');
const chalk = require("chalk");
const { initialCheck, check, list } = require('../controller/todo-controller');

class Check extends Command {
  async run() {
    const { args } = this.parse(Check);
    initialCheck();
    if (isNaN(Number(args.todoIndex)) || list().length < Number(args.todoIndex)) {
      this.log(chalk.bold.red(`Sorry! ${args.todoIndex} is not a valid todo`))
    } else {
      check(args.todoIndex);
    }
  }
}

Check.description = 'Checks or uncheckd a Todo';

Check.args = [{ name: 'todoIndex' }]

module.exports = Check;
