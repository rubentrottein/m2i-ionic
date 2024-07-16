import { Component, inject } from '@angular/core';


class Task {
  id : number = Date.now();
  title: string= '';
  done: boolean= false;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  title = "Tout-Doux Liste";
  task: Task;

  
  toDoList: any[] = [
    {id: Date.now(), title: "Titre de la tâche N°4", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Titre de la tâche N°5", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Titre de la tâche N°1", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Titre de la tâche N°2", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Titre de la tâche N°3", done : true, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Titre de la tâche N°6", done : false, icon : Math["floor"](Math.random() * 12)}
  ]
  
  toDoArchive = this.toDoList.filter(task => task.done == true );
  saveTasks(){
    localStorage.setItem("list", JSON.stringify(this.toDoList));
  }
  addTask(taskTitle: string, type: string){
    if(type == "click")
      taskTitle= String(prompt("Tâche"));
    else {
      let task = new Task ();
      task.title= taskTitle;
      this.toDoList.push(task);
      alert("Nouvelle tâche ajoutée");
    }
  }
  deleteTask(){

  }

}
