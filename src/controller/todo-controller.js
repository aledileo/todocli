const fse = require('fs-extra');
const path = require('path');
const os = require('os');

const todoFileDir = path.join(os.homedir(), 'todocli');
const todoFile = path.join(todoFileDir, 'todos.json');
let todos = [];

function initialCheck() {
  if (!fse.existsSync(todoFile)) {
    fse.ensureFileSync(todoFile);
    fse.writeJsonSync(todoFile, { todos: todos });
  } else {
    todos = fse.readJsonSync(todoFile, { encoding: 'utf-8' }).todos;
  }   
};

function saveTodos() {
  fse.writeJsonSync(
    todoFile,
    { todos: todos },
    { encoding: 'utf-8' }
  );
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
  todos = todos.map(
    (todo, i) => 
      i === todoIndex - 1 
      ? {...todo, done: !todo.done}
      : todo
  );
  saveTodos();
}

function remove(todoIndex) {
  todos = todos.filter(
    (todo, i) => i !== todoIndex
  );
  saveTodos();
}

module.exports = { initialCheck, add, list, check, remove };
