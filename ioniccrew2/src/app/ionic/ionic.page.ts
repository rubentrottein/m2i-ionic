import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonAccordion, IonSearchbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.page.html',
  styleUrls: ['./ionic.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ExploreContainerComponent, IonLabel, IonAccordion, IonSearchbar]
})
export class IonicPage implements OnInit {

  ngOnInit() {
    const result = document.querySelectorAll("#result")[0];
    const fruits = ["Pomme", "Banane", "Mirabelle", "Coing"];
    
    function alphabetical(tab : String[]){
      let p = document.createElement("p");
      for(let fruit of tab.sort()){
        p.innerHTML += "<hr>" + fruit;
      }
      return p;
    }

    result.innerHTML += fruits.join( " - " );
    document.querySelectorAll("#activate")[0].addEventListener("click", ()=>{
      result.append(alphabetical(fruits));
    });
  }

  hide(){
    document.querySelectorAll("#exercices")[0].classList.toggle("hide");
  }
  directives = [
    {name: "ion-header", description: "En tête de la page"},
    {name: "ion-toolbar", description: "Barre d'outils à l'intérieur de l'en tête ou du pied de page"},
    {name: "ion-title", description: "Titre de la page"},
    {name: "ion-segment", description: "description.txt"},
    {name: "ion-button", description: "description.txt"},
    {name: "ion-item", description: "Objet générique"},
    {name: "ion-list", description: "Liste à puces"},
    {name: "ion-grid", description: "description.txt"},
    {name: "ion-row", description: "description.txt"},
    {name: "ion-col", description: "description.txt"},
    {name: "ion-cord", description: "description.txt"},
    {name: "ion-avatar", description: "description.txt"},
    {name: "ion-note", description: "description.txt"}
  ]
  directivesSaisie = [
    {name: "ion-input", description: "Champ de saisie"},
    {name: "ion-textarea", description: "Champ de texte"},
    {name: "ion-select", description: "Liste déroulante"},
    {name: "ion-checkbox", description: "Case à choix multiple"},
    {name: "ion-radio", description: "Bouton de choix"},
    {name: "ion-range", description: "Plage de données (numériques)"}
  ]
  directivesNavigation = [
    {name: "ion-nav", description: "Element de navigation de la page Ionic"},
    {name: "ion-page", description: "Page Ionic"},
    {name: "ion-nav-bar", description: "Barre de navigation"},
    {name: "ion-tabs", description: "Onglets de navigation"}
  ]
  directivesStyle = [
    {name: "ion-text", description: "Texte avec styles Ionic"},
    {name: "ion-label", description: "Libellé pour un champ de saisie"},
    {name: "ion-badge", description: "Badge nombre ou icône"},
    {name: "ion-spinner", description: "Indicateur de chargement"}
  ]

  searchContent(){
    const term = document.querySelectorAll("#search")[0] as HTMLElement;
    const compareStrings = (directive: { name: string }) => {
      return (directive.name === term.innerHTML);
    };
    console.log(this.directives.filter(compareStrings));
  }
}
