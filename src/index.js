import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/todo.css';
//import { Provider } from 'react-redux';
import { Provider } from 'mobx-react';
//import ConfigureStore from './store/store';
import TaskListModel from './models/TaskListModel';

//const store = ConfigureStore();
const store = new TaskListModel();
store.addTask('ajouter item');

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));