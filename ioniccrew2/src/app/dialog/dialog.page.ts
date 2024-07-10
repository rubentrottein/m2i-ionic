import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.page.html',
  styleUrls: ['./dialog.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ExploreContainerComponent]
})
export class DialogPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  version: Number = 0.7
  nom : String =  "";

  setValue(val? : string) {
    val?this.nom = val : this.nom = 'Nancy';
  }
  setDisplay(){
    document.querySelectorAll("section")[0].classList.toggle("vanish");
  }
}
