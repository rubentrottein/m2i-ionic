import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { User } from '../models/User';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, NgFor, IonCard],
})
export class Tab3Page {
  constructor() {}
  userTab : User [] = [
    {name:"Jane Doe", image: 170, description: "Description"},
    {name:"Jean-Jean Jeannot", image: 124, description: "Description de Jean jean le jean jean"}
  ];
}