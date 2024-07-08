import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, NgFor],
})
export class Tab1Page {
  constructor() {
    this.testTab
  }
  

  //WorkFlow : A => tabs.page.ts
  testString = "TestString";
  ngOnInit(){
  }
  testTab : String [] = [
    "Duck",
    "Bear",
    "Fox"
  ]
}
