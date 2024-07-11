import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { User } from '../models/User';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, NgFor, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class Tab3Page {
  constructor() {}
  title : string = "Utilisateurs (TypeScript)";

  userTab : User [] = [
    {id:0, name:"Jean-Jean Espresso", image: 17, title:"Directeur de la Caféine",  description: `Jean-Sébastien, alias "Java Juggler", est le sorcier des arômes et le magicien des macchiatos. Avec un œil aguerri et une main ferme, il prépare chaque matin des potions miraculeuses qui réveillent même les âmes les plus fatiguées du bureau. On dit que ses espressos sont si puissants qu'ils pourraient ressusciter un zombie. Quand il n'est pas en train de jongler avec des tasses de café, Jean-Sébastien organise des concours de latte art, où il est le champion incontesté des dessins en mousse de licornes. Son motto : "Un bureau sans café est comme un ordinateur sans internet - inutile et triste.`},
    {id:1, name:"Camille Calembourg", image: 4, title:"Responsable de la Gallégeade",  description: `Camille, surnommée "La Comédie Czar", est la source inépuisable de bonne humeur et de fous rires dans l'entreprise. Sa mission principale ? S'assurer que personne ne prenne la vie trop au sérieux. Avec un répertoire de blagues aussi vaste que l'océan, elle transforme les réunions les plus monotones en véritables spectacles de stand-up. Spécialiste des jeux de mots et des calembours, Camille est également connue pour ses imitations hilarantes des chefs lors des pauses déjeuner. Grâce à elle, les lundis ne font plus peur et les vendredis arrivent toujours trop vite. Son crédo : "Rire, c'est comme le Wi-Fi - mieux vaut l'avoir gratuit et à volonté.`},
    {id: 3, name: "Léa Bricolette", image: 5, title: "Maître du Bricolage de Bureau", description: "Léa, surnommée 'La Fée du Scotch', est la MacGyver des bureaux. Avec son fidèle pistolet à colle et ses rouleaux de ruban adhésif, elle peut réparer n'importe quoi en un temps record. Chaise cassée ? Pas de problème. Clavier qui ne fonctionne plus ? Léa est déjà en route. En plus de ses talents de bricoleuse, elle organise des ateliers de DIY (Do It Yourself) pour ses collègues, où elle enseigne comment transformer des fournitures de bureau en œuvres d'art modernes. Sa devise : 'Il n'y a rien qu'un peu de créativité et beaucoup de scotch ne puissent réparer.'"}
    
  ];

  gotoAnchor(anchor:any){
    document.getElementById(anchor)?.scrollIntoView();
    console.log(anchor)
  }
}