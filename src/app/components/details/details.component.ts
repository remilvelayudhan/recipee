import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {



  constructor(public recipeService:RecipeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeInformation(this.id).subscribe((res:any)=>{
      console.log(res);
      this.details = res;
    })
    this.recipeService.getInstructions(this.id).subscribe((res:any)=>{
      this.steps = res[0].steps;
      console.log(this.steps);
    })
  }

  id:any;
  details:any;
  steps:any;


}
