import React, {Component} from 'react';
import ToDo from './ToDo';
//import { connect } from 'react-redux';
import { observer, inject } from 'mobx-react';
import { TaskConsumer } from './App';

@inject('store')
@observer
class ToDoList extends Component {
    render (){
        const store = this.props.store;
        return (
            <>
                <h1 className="m-3">Liste de tâches</h1>
                <TaskConsumer>
                    {({tasks})=>(
                        <ul className="list-group m-3">
                   
                        {
                           
                            tasks.map((task) => <ToDo task={task} key={task.id} />)
                        }
                        </ul>
                    )}
                
                </TaskConsumer>
            </>

        )
    }
}


/*const ToDoList = ({tasks, match, onToggleCompleted}) => {
        let filteredTasks;
        switch(match.params.filter){
            case 'completed':
                filteredTasks = tasks.filter(task => task.completed)
            break;
            default:
                filteredTasks = tasks
        }

        if(filteredTasks.length === 0){
           return ( <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                <li className="list-group-item">Aucune tâche à afficher</li>
            </ul>
        </>)
        }
           
        else
        {

            return (
                    <>
                        <h1 className="m-3">Liste de tâches</h1>
                        <ul className="list-group m-3">
                        {
                            filteredTasks.map((task) => <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />)
                        }
                        </ul>
                    </>

                )
            }
    }*/
   /* const mapStateToProps = (state) => {
        return {
           tasks:state.tasks
        }
    }*/
//export default connect(mapStateToProps)(ToDoList);
export default ToDoList;