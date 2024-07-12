import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

interface Article {
  // Define the properties of an Article based on your data model
  title: string;
  img : "https://picsum.photos/500";
}

@Component({
  selector: 'app-scss',
  templateUrl: './scss.page.html',
  styleUrls: ['./scss.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ExploreContainerComponent, NgFor]
})
export class ScssPage implements OnInit {

  articles: Article[] = [];

  constructor() {}

  ngOnInit() {
    this.loadArticles();
  }

  async loadArticles() {
    try {
      this.articles = await this.fetchJson<Article>("http://localhost:3999/api/school/articles");
      console.log(await this.fetchJson<Article>("http://localhost:3999/api/school/articles"))
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  }

  async fetchJson<T>(url: string): Promise<T[]> {
    return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Forsooth, a scourge upon our fetch quest: ' + response.statusText);
      }
      return response.json() as Promise<T[]>;
    })
    .then(data => {
      return data;
    })
  }
}
