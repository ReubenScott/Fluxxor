const React = require('react');
const Fluxxor = require('fluxxor');
const FluxMixin = Fluxxor.FluxMixin(React);

const TodoItem = React.createClass({
	mixins: [FluxMixin],
  
	propTypes: {
	  todo: React.PropTypes.object.isRequired
	},
  
	render: function() {
	  var style = {
		textDecoration: this.props.todo.complete ? "line-through" : ""
	  };
  
	  return (
		<div>
	      <span style={style} onClick={this.onClick}>{this.props.todo.text}</span>
	      <p style={style} onClick={this.onClick}>{this.props.todo.text}</p>
		</div>
	   );
	},
  
	onClick: function() {
	  this.getFlux().actions.toggleTodo(this.props.todo.id);
	}
});
  
module.exports = TodoItem;
