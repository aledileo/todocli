const { Command } = require('@oclif/command');
const eol = require('os').EOL;
const chalk = require('chalk');
const { initialCheck, list } = require('../controller/todo-controller');

const checkChar = '\u2713 ';

class List extends Command {
  async run() {
    const { args } = this.parse(List);
    initialCheck();
    const todos = list();
    if (todos.length === 0) {
      this.log(chalk.magenta(`${eol}You don\'t have any todos. Enjoy your day!${eol}`));
    } else {
      this.log(chalk.magenta(`${eol}Todos:`));
      todos.forEach(
        ({ todo, done }, i) => 
          !done
          ? this.log(`  ${i + 1}. ${chalk.green(checkChar)}${todo}`)
          : this.log(`  ${i + 1}. ${todo}`)
        );
    }
  }
}

List.description = 'Lists all Todos';

module.exports = List;
