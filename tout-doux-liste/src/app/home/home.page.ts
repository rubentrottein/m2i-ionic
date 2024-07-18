import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage-angular";
import { Task } from 'src/app/models/Task';
import { TasksFilterPipe } from './pipes/tasks-filter.pipe';

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
  
  pinnedTask : Task;
  task: Task = new Task();

  toDoList: any[] = [
    {id: Date.now(), title: "Transférer les saves des consoles rétro", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Réparer le Steam Deck", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Bruler l'ordi lénovo", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Boire + de Café", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Redistribuer l'argent de Macron", done : false, icon : Math["floor"](Math.random() * 12)},
    {id: Date.now(), title: "Regarder Hidalgo se noyer dans la seine", done : true, icon : Math["floor"](Math.random() * 12)}
  ]
  
  toDos = this.toDoList.filter(task => task.done == false );
  toDoArchive = this.toDoList.filter(task => task.done == true );
  
  saveTasks(){
    localStorage.setItem("list", JSON.stringify(this.toDoList));
    console.log(localStorage.getItem("list"));
    this.toDos = this.toDoList.filter(task => task.done == false );
    this.toDoArchive = this.toDoList.filter(task => task.done == true );
  }

  keyDetection(code: string){
    if(code === 'Enter'){
      this.addTask('');
    }
  }

  addTask(type: string){
    if(this.task.title && this.task.title.length>0){
      if(type == "click"){
        console.log("Ajout de tâche Prompt");
        
        this.task.title = String(prompt("Tâche"));
      } else {
        this.task.title = this.task.title;
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
  pin(currentTask : Task){
    this.pinnedTask = currentTask;
  }

  /* API mode

  addTask(task: Task):Observable<Task> {
  return this.http.post<Task>}

  this.taskService.addTask(this.task).subscribe(task:Task => {
    this.tasks.push(task);
    this.task=new Task();
  })
  */
}