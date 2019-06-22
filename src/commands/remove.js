const { Command } = require('@oclif/command');
const eol = require('os').EOL;
const chalk = require('chalk');
const { initialCheck, remove, list } = require('../controller/todo-controller');

const checkChar = '\u2713 ';
const isValidNumber = arg => isNaN(Number(arg));

class Remove extends Command {
  async run() {
    const { args } = this.parse(Remove);
    initialCheck();
    let todos = list();
    const isValidArg = todos[args.todoIndex - 1] === undefined || isValidNumber(args.todoIndex); 
    if (isValidArg) {
      this.log(chalk.red(`${eol}Sorry! The given index didn\'t match any Todo${eol}`));
    } else {
      remove(Number(args.todoIndex - 1));
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

Remove.description = 'Removes a Todo in given index';

Remove.args = [{ name: 'todoIndex' }]

module.exports = Remove;
