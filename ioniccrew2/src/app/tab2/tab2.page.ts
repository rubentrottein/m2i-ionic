import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  constructor() {}

  
  /**/
  ngOnInit(){
  const formatDate = (date : Date) =>
    `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${String(
      date.getSeconds(),
    ).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`
  
    async function fetchPokemon(name : String) {
      const pokemonQuery = `
        query PokemonInfo($name: String) {
          pokemon(name: $name) {
            id
            number
            name
            image
            attacks {
              special {
                name
                type
                damage
              }
            }
          }
        }
      `
    
      const response = await window.fetch('https://graphql-pokemon2.vercel.app/', {
        // learn more about this API here: https://graphql-pokemon2.vercel.app/
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
          query: pokemonQuery,
          variables: { name: name.toLowerCase() },
        }),
      })
    
      const { data, errors } = await response.json()
      if (response.ok) {
        const pokemon = data?.pokemon
        if (pokemon) {
          // add fetchedAt helper (used in the UI to help differentiate requests)
          pokemon.fetchedAt = formatDate(new Date())
          return pokemon
        } else {
          return Promise.reject(new Error(`No pokemon with the name "${name}"`))
        }
      } else {
        // handle the graphql errors
        const error = new Error(
          errors?.map((e : Error) => e.message).join('\n') ?? 'unknown',
        )
        return Promise.reject(error)
      }
      
    }
    function createFigure(pkmn : String){
      let figure = document.createElement("figure");
      let figcaption = document.createElement("figcaption");
      let img = document.createElement("img");
      let title = document.createElement("h4");
      fetchPokemon(pkmn)
      .then((data) => {
        img.src = data.image;
        title.innerHTML = data.name;
        figcaption.append(img, title);
        figure.append(figcaption);
      }
    )
    return figure
    }
    function getPkmn(pkmn : String){
      document.querySelectorAll("#result")[0].append(createFigure(pkmn));
    }
    document.querySelectorAll("#search")[0].addEventListener("click", ()=>{
      let searchBar = document.getElementById("pkmn") as HTMLInputElement;
      getPkmn(searchBar.value);
    })
  }
}