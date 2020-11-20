import { observable, computed, action } from 'mobx';
import TaskModel from './TaskModel';

export default class TaskListModel {
    @observable tasks= [];

    @computed
    get unifinishedTaskCount(){
        return this.tasks.filter(task => !task.completed).length
    }

    @action
    addTask(name){
        this.tasks.push(new TaskModel(name));
    }
}