const fs = require('fs');
const path = require('path');
const os = require('os');

const todoFile = path.join(os.homedir(), 'checkme', 'todos.json');

class BaseTodoController {
  todos = [];

  constructor() {
    if (fs.existsSync(path.dirname(todoFile))) {
      this.todos = JSON.parse(fs.readFileSync(todoFile, { encoding: 'utf-8' }));
    }
  }

  saveTodos() {
    if (!fs.existsSync(path.dirname(todoFile))) {
      fs.mkdirSync(path.dirname(todoFile));
    }
    const data = JSON.stringify(this.todos);
    fs.writeFileSync(todoFile, data, { encoding: 'utf-8' });
  }

  add(todo) {
    const newTodo = { todo: todo, done: false };
    this.todos = [...this.todos, newTodo];
    this.saveTodos();
  }

}


module.exports = BaseTodoController;
