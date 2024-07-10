import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, NgFor],
})
export class Tab1Page {
  constructor() {
    this.testTab
  }
  

  //WorkFlow : A => tabs.page.ts
  testString = "let demo : string = \"Chaine de caractère de démonstration\"";
  
  testTab : String [] = [
    "Snake",
    "Duck",
    "Fox",
    "Bear",
  ]
  
  alpha = (tab : String []) : any=>{
    setTimeout(() => {
      let stringTab : any [] = tab.sort();
      return stringTab;
    }, 3000);
    return null;
  }
  
  sortedTab : String [] = this.alpha(this.testTab);

  firstChar = (string : String) :  any =>{
    return string[0];
  }
  first = this.firstChar("Bonjour")
}
