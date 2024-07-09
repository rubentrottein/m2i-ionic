import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.page.html',
  styleUrls: ['./ionic.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ExploreContainerComponent]
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
}
