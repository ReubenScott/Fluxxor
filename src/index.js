import React from 'react';
import ReactDOM from 'react-dom';
import Fluxxor from 'fluxxor';


const Application = require('./components/App');
const actions = require('./actions/actions');
const TodoStore = require('./stores/TodoStore');

const stores = {
  TodoStore: new TodoStore()
};

const flux = new Fluxxor.Flux(stores, actions);

// flux.on("dispatch", function(type, payload) {
//   if (console && console.log) {
//     console.log("[Dispatch]", type, payload);
//   }
// });


ReactDOM.render(<Application flux={flux} />, document.getElementById("root"));
