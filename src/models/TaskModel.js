import { observable } from 'mobx';
import uniqid from 'uniqid';
export default class TaskModel {
    id = uniqid();
    @observable name;
    @observable completed = false;

    constructor(name){
        this.name = name;
        
    }
}