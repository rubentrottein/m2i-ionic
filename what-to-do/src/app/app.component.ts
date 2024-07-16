import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonIcon, IonButton, IonFabButton, IonFab , IonCheckbox, IonBadge, IonButtons, IonItem, IonLabel, IonList, IonListHeader, IonApp} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, NgFor, IonIcon, IonFabButton, IonButton, IonFab , IonCheckbox, IonBadge, IonButtons, IonItem, IonLabel, IonList, IonListHeader],
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  list = [
    {id: Date.now(), title: "Titre de la tâche N°1", done : false, icon : 1},
    {id: Date.now(), title: "Titre de la tâche N°2", done : false, icon : 2},
    {id: Date.now(), title: "Titre de la tâche N°3", done : false, icon : 3}
  ]

  title = "Tout-Doux Liste"

  addTask(){
    /*
    let task = {prompt("Tâche") : string;
    this.list.push({task, false})
    */
   alert("Nouvelle tâche");
  }
}
