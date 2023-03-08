import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { Recipee, RecipeeData } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  
  results:Recipee[]=[];
  searchText:string="";

  constructor(private router: ActivatedRoute, private _recipeService: RecipeService,private route:Router) { }

  ngOnInit(): void {

    this.router.params
      .pipe(
        tap(searchText=>this.searchText=searchText['query']),
        switchMap(searchText => this._recipeService.getSearchResults(searchText['query'])))
        .subscribe(resp => {
          this.results= resp['results'];
        })


  console.log(this.results);
  }

  showDetails(id:any){
    this.route.navigate(['/details', id]);
  }
  


}
