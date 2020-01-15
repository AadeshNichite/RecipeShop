import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipies : Recipe[] = [
    new Recipe('A Test Recipe','tasty','https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj45O259YTnAhWy4jgGHcTDA5kQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.acouplecooks.com%2Frecipes%2F&psig=AOvVaw0GSboS4qVbEpsh3mfNzpmc&ust=1579154060965259'),
    new Recipe('B Test Recipe','Tasty','https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj45O259YTnAhWy4jgGHcTDA5kQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.acouplecooks.com%2Frecipes%2F&psig=AOvVaw0GSboS4qVbEpsh3mfNzpmc&ust=1579154060965259')

  ];
  constructor() { }

  ngOnInit() {
  }

}
