const fs = require('fs');
const path = require('path');
const os = require('os');

const todoFile = path.join(os.homedir(), 'checkme', 'todos.json');
let todos = [];

function initialCheck() {
  if (!fs.existsSync(path.dirname(todoFile))) {
      fs.mkdirSync(path.dirname(todoFile));
    } else {
      todos = JSON.parse(fs.readFileSync(todoFile, { encoding: 'utf-8' }));
  }
};

function saveTodos() {
  const data = JSON.stringify(todos);
  fs.writeFileSync(todoFile, data, { encoding: 'utf-8' });
}

function add(todo) {
  const newTodo = { todo: todo, done: false };
  todos = [...todos, newTodo];
  saveTodos();
}

function list() {
  return todos;
}

function check(todoIndex) {
  todos = todos.map((todo, i) => i === todoIndex - 1 ? {...todo, done: !todo.done} : todo);
  saveTodos();
}

module.exports = { initialCheck, add, list, check };
