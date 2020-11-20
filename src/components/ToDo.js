import React from 'react';
import { observer } from 'mobx-react';

const ToDo = observer(({task})=>(
    <li className={"list-group-item d-flex align-tiems-center " + (task.completed?"bg-success":null)}>
    {task.name}
    <button className={"btn btn-sm ml-auto "+(task.completed?"btn-success":"btn-outline-success")} onClick={()=>(task.completed = !task.completed)}>&#x2713;</button>
</li>

))

/*class ToDo extends Component {

   
        state={
            completed:this.props.task.completed
        }
    

    toggleCompleted=()=>{
        this.setState(prevState => ({
            completed:!prevState.completed
        })
        )
        this.props.onToggleCompleted(this.props.task.id)

    }
  
    render(){
        return (
            <li className={"list-group-item d-flex align-tiems-center " + (this.state.completed?"bg-success":null)}>
                    {this.props.task.name}
                    <button className={"btn btn-sm ml-auto "+(this.state.completed?"btn-success":"btn-outline-success")} onClick={()=>this.toggleCompleted()}>&#x2713;</button>
                </li>

        )
    }
}*/

export default ToDo;