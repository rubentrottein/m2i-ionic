import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.page.html',
  styleUrls: ['./ionic.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IonicPage implements OnInit {

  constructor() { }

  ngOnInit() {
    function alphabetical(tab : String[]){
      let p = document.createElement("p");
      for(let fruit of tab.sort()){
        p.innerHTML += "<hr>" + fruit;
      }
      return p;
    }
    const fruits = ["Pomme", "Banane", "Mirabelle", "Coing"];
    document.querySelectorAll("#result")[0].innerHTML += fruits.join( " - " );
    document.querySelectorAll("#result")[0].append(alphabetical(fruits));
    document.querySelectorAll("#activate")[0].addEventListener("click", ()=>{
      alert(alphabetical(fruits));
    });
  }
}
