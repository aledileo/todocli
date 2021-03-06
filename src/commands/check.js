const { Command } = require('@oclif/command');
const chalk = require("chalk");
const eol = require("os").EOL;
const { initialCheck, check, list } = require('../controller/todo-controller');

const checkChar = '\u2713 ';
const isValidNumber = arg => isNaN(Number(arg));

class Check extends Command {
  async run() {
    const { args } = this.parse(Check);
    initialCheck();

    let todos = list();
    const isValidArg = todos[args.todoIndex - 1] === undefined || isValidNumber(args.todoIndex); 

    if (isValidArg) {
      this.log(chalk.red(`${eol}Sorry! The given index didn\'t match any Todo${eol}`));
    } else {
      check(args.todoIndex);
      todos = list();
      this.log(chalk.magenta(`${eol}Todos:`));
      todos.forEach(
        ({ todo, done }, i) => 
          done
          ? this.log(`  ${i + 1}. ${chalk.green(checkChar)}${todo}`)
          : this.log(`  ${i + 1}. ${todo}`)
        );
    }
  }
}

Check.description = 'Checks or uncheckd a Todo';

Check.args = [{ name: 'todoIndex' }]

module.exports = Check;
