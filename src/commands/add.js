const { Command } = require('@oclif/command');
const chalk = require('chalk');
const eol = require('os').EOL;
const { initialCheck, add, list } = require('../controller/todo-controller');

const checkChar = '\u2713 ';

class Add extends Command {
  async run() {
    const { args } = this.parse(Add);
    initialCheck();
    add(args.todo);
    this.log(`${args.todo} added succesfully!`)
    const todos = list();
    this.log(chalk.magenta(`${eol}Todos:`));
    todos.forEach(
      ({ todo, done }, i) => 
        done
        ? this.log(`  ${i + 1}. ${chalk.green(checkChar)}${todo}`)
        : this.log(`  ${i + 1}. ${todo}`)
      );
  }
}

Add.description = 'Adds a Todo';

Add.args = [{ name: 'todo' }];

module.exports = Add;
