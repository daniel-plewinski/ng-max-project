import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is just a test',
      'https://www.maxpixel.net/static/photo/1x/Cook-Cooking-Recipe-Culinary-Food-Restaurant-867989.jpg'),
    new Recipe('Test recipe', 'This is just a test',
      'https://www.maxpixel.net/static/photo/1x/Cook-Cooking-Recipe-Culinary-Food-Restaurant-867989.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
