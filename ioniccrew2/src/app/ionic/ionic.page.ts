import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonAccordion, IonSearchbar, IonButton, IonPicker,IonPickerColumn, IonPickerColumnOption, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { directives, directivesNavigation, directivesSaisie, directivesStyle } from '../models/IonicDirectives'

@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.page.html',
  styleUrls: ['./ionic.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ExploreContainerComponent, IonButton, IonLabel, IonAccordion, IonSearchbar, IonPicker, IonPickerColumnOption, IonPickerColumn, IonSelect, IonSelectOption]
})

export class IonicPage implements OnInit {

  ngOnInit() {}
    

  title = "Index des directives Ionic";


  searchTerm: string = '';
  category = "default";
  categoryPick = this.category;
  directivesTab = directives;

  selectTab(){
    switch(this.category){
      case "input" : this.directivesTab = directivesSaisie; break;
      case "nav" : this.directivesTab = directivesNavigation; break;
      case "style" : this.directivesTab = directivesStyle; break;
      default : this.directivesTab = directives;
    }
    return this.directivesTab;
  }

  searchContent(){
    this.directivesTab = this.directivesTab.filter(directive => 
      this.cleanString(directive.name).includes(this.cleanString(this.searchTerm))
    );
  }

  cleanString(stringToClean : string){
    stringToClean=stringToClean.toLowerCase();
    return stringToClean.trim();
  }
  ngInit(){
    document.querySelectorAll("#category")[0].addEventListener("change", ()=>{
      this.selectTab();
      console.log(document.querySelectorAll("#category")[0]);
    });
  }
}