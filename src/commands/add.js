const { Command } = require('@oclif/command');
const BaseTodoController = require('../controller/todo-controller');

class Add extends Command {
  async run() {
    const { args } = this.parse(Add);
    const TodoController = new BaseTodoController();
    TodoController.add(args.todo);
    this.log(`${args.todo} added succesfully!`)
  }
}

Add.description = 'Adds a Todo';

Add.args = [{ name: 'todo' }];

module.exports = Add;
