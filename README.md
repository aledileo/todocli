todo
====



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todo.svg)](https://npmjs.org/package/todo)
[![Downloads/week](https://img.shields.io/npm/dw/todo.svg)](https://npmjs.org/package/todo)
[![License](https://img.shields.io/npm/l/todo.svg)](https://github.com/aledileo/todo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todo
$ todo COMMAND
running command...
$ todo (-v|--version|version)
todo/0.1.0 linux-x64 node-v12.0.0
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo add [TODO]`](#todo-add-todo)
* [`todo check [TODOINDEX]`](#todo-check-todoindex)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo list`](#todo-list)
* [`todo remove [TODOINDEX]`](#todo-remove-todoindex)

## `todo add [TODO]`

Adds a Todo

```
USAGE
  $ todo add [TODO]
```

_See code: [src/commands/add.js](https://github.com/aledileo/todo/blob/v0.1.0/src/commands/add.js)_

## `todo check [TODOINDEX]`

Checks or uncheckd a Todo

```
USAGE
  $ todo check [TODOINDEX]
```

_See code: [src/commands/check.js](https://github.com/aledileo/todo/blob/v0.1.0/src/commands/check.js)_

## `todo help [COMMAND]`

display help for todo

```
USAGE
  $ todo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `todo list`

Lists all Todos

```
USAGE
  $ todo list
```

_See code: [src/commands/list.js](https://github.com/aledileo/todo/blob/v0.1.0/src/commands/list.js)_

## `todo remove [TODOINDEX]`

Removes a Todo in given index

```
USAGE
  $ todo remove [TODOINDEX]
```

_See code: [src/commands/remove.js](https://github.com/aledileo/todo/blob/v0.1.0/src/commands/remove.js)_
<!-- commandsstop -->
