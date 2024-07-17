import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage-angular";
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  constructor(private storage: Storage) {}

  async ngOnInit() : Promise<void> {
    await this.storage.create();
  }
  

  /*************** Données  **************/ 
  title : string = "Tout-Doux Liste";
  
  task: Task = new Task();

  toDoList: any[] = [
    {id: Date.now(), title: "Titre de la tâche N°4", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Titre de la tâche N°5", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Titre de la tâche N°1", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Titre de la tâche N°2", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Titre de la tâche N°3", done : true, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Titre de la tâche N°6", done : false, icon : Math["floor"](Math.random() * 12)}
  ]
  
  toDos = this.toDoList.filter(task => task.done == false );
  toDoArchive = this.toDoList.filter(task => task.done == true );
  
  async saveTasks(){
    localStorage.setItem("list", JSON.stringify(this.toDoList));
    await console.log(localStorage.getItem("list"));
  }

  keyDetection(code: string){
    if(code === 'Enter'){
      this.addTask('');
    }
  }

  addTask(type: string){
    if(this.task.title && this.task.title.length>0){
      if(type == "click")
        this.task.title = String(prompt("Tâche"));
      else {
        this.task.title= this.task.title;
      }
      this.toDoList.push(this.task);
      this.saveTasks();
      console.log("Nouvelle tâche ajoutée" + this.task);
      this.task = new Task();
    }
  }
  deleteTask(currentTask : Task){
    this.toDoList.splice(this.toDoList.indexOf(currentTask), 1);
    this.saveTasks();
  }
}