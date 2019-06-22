const { Command } = require('@oclif/command');
const { initialCheck, list } = require('../controller/todo-controller');

class List extends Command {
  async run() {
    const { args } = this.parse(List);
    initialCheck();
    const todos = list();
    todos.forEach(({ todo, done }, i) => this.log(`${i + 1}. [${done ? 'x' : ' '}] ${todo}`));
  }
}

List.description = 'Lists all Todos';

module.exports = List;
