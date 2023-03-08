import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText:string ='';

  constructor(private router:Router,private _recipeServices:RecipeService) { }

  ngOnInit(): void {
  }

  search(): void {
      this.router.navigate(['/results',this.searchText]);
  }
}
