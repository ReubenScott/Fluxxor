const constants = require('../constants/config');
 
const actions = {

	init: function() {		
		fetch('/todo.json')
		  .then((res) => res.json())		  
		  .then((data) => {
			console.log(JSON.stringify(data));
			this.dispatch(constants.INIT_TODO, data);
		   }
		  )	   
		   .catch((e) => {
			  console.log(e.message); 
		   });
	},
  
	addTodo: function(text) {
	  this.dispatch(constants.ADD_TODO, {text: text});
	},
  
	toggleTodo: function(id) {
	  this.dispatch(constants.TOGGLE_TODO, {id: id});
	},
  
	clearTodos: function() {
	  this.dispatch(constants.CLEAR_TODOS);
	}
  };

module.exports = actions; 



