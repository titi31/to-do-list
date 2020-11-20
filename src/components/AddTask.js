import React, {Component}  from 'react';
//import { connect } from 'react-redux';
//import uniqid from 'uniqid';
//import { addTask } from '../actions';
import { observable,  action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class AddTask extends Component{

    @observable newTaskTitle= '';

    @action
    handleSubmit=(e)=>{
        e.preventDefault()
       /* let item = {
            id: uniqid(),
            name: this.newTask.value,
            completed: false
        }*/
        
        this.props.store.addTask(this.newTaskTitle)
        this.newTaskTitle = ''
        this.props.history.push('/')
    }

    @action
    handleInputChange = (e) => {
        this.newTaskTitle = e.target.value 
     
    }

   

    render(){
        return (
            <section>
                <h1 className="m-3">Nouvelle tâche</h1>
                <div className="card mx-3">
                    <form className="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label form="taskName">Nom de la tâche</label>
                            <input type="text" className="form-control"  onChange={this.handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Créer</button>
                    </form>
                </div>
            </section>
        )
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (item) => {
            dispatch(addTask(item))
        }
    }
}*/

//export default connect(null,mapDispatchToProps)(AddTask);
export default AddTask;