const Fluxxor = require('fluxxor');
const constants = require('../constants/config');

var TodoStore = Fluxxor.createStore({

	initialize: function() {
		this.todoId = 0;
		this.todos = {};
	
		this.bindActions(
			constants.INIT_TODO, this.onInitTodo,
			constants.ADD_TODO, this.onAddTodo,
			constants.TOGGLE_TODO, this.onToggleTodo,
			constants.CLEAR_TODOS, this.onClearTodos
		);
	},

	
	onInitTodo: function(payload) {
		let id = payload.id;
		let todo = payload.todo;
		this.todos[id] = todo;
		this.emit("change");
	},
	
	onAddTodo: function(payload) {
		var id = this._nextTodoId();
		var todo = {
			id: id,
			text: payload.text,
			complete: false
		};
		this.todos[id] = todo;
		this.emit("change");
	},
	
	onToggleTodo: function(payload) {
		var id = payload.id;
		this.todos[id].complete = !this.todos[id].complete;
		this.emit("change");
	},
	
	onClearTodos: function() {
		var todos = this.todos;
	
		Object.keys(todos).forEach(function(key) {
		if(todos[key].complete) {
			delete todos[key];
		}
		});
	
		this.emit("change");
	},
	
	getState: function() {
		return {
			todos: this.todos
		};
	},
	
	_nextTodoId: function() {
		return ++this.todoId;
	}
});


module.exports = TodoStore; 