import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAccordionGroup,IonAccordion,IonItem, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, NgFor, IonAccordionGroup,IonAccordion, IonItem, IonLabel ],
})
export class Tab1Page {
  constructor() {
    this.testTab
  }
  title : string = "Exercices d'affichage(Angular)"

  //WorkFlow : A => tabs.page.ts
  testString = "let demo : string = \"Chaine de caractère de démonstration\"";
  
  testTab : String [] = [
    "Snake",
    "Duck",
    "Fox",
    "Bear",
  ]
  
  alpha = (tab : String []) : any=>{
    return tab.sort();
  }
  
  sortedTab : String [] = this.alpha(this.testTab);

  firstChar = (string : String) :  any =>{
    return string[0];
  }
  first = this.firstChar("Bonjour")

  fruits = ["Pomme", "Banane", "Mirabelle", "Coing"];
  
  
  
  ngOnInit(){
    const result = document.querySelectorAll("#result")[0];
    document.querySelectorAll("#activate")[0].addEventListener("click", ()=>{
      result.innerHTML += this.fruits.join( " - " );
      result.append(this.alphabetical(this.fruits));
    });
  }

  alphabetical(tab : String[]){
    let p = document.createElement("p");
    for(let fruit of tab.sort()){
      p.innerHTML += "<hr>" + fruit;
    }
    return p;
  }

  hide(element:string){
    document.querySelectorAll(element)[0].classList.toggle("hide");
    document.querySelectorAll(element)[0].classList.toggle("open");
  }
}
