import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecipeeData } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getSearchResults(searchText: any): Observable<RecipeeData> {
    let params = new HttpParams({ fromObject: { number: 5, apiKey: environment.API_KEY } });
    return this.http.get<RecipeeData>(`${environment.api}/recipes/complexSearch?query=${searchText}`, { params })
      .pipe(catchError(this.handleError))
  }
 

  public getRecipeInformation(id:any){
    let params = new HttpParams({ fromObject: { includeNutrition: false, apiKey: environment.API_KEY } });
    return this.http.get(`${environment.api}/recipes/${id}/information`,{params})
  }


   

  public getInstructions(id:any){
    let params = new HttpParams({ fromObject: { apiKey: environment.API_KEY } });
     return this.http.get(`${environment.api}/recipes/${id}/analyzedInstructions`,{params});
  }

  handleError(error: any) {
    if (error.errorMessage) {
      return throwError(error.errorMessage);
    } else {
      return throwError(`Error: ${error}`);
    }
  }

}
