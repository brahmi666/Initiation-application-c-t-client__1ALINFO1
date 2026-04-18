import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Suggestion } from '../models/suggestion';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
apiSuggestion:string="http://localhost:3000/suggestions";
  constructor(private http:HttpClient){  }

//to do
   getAllSuggestions(){
      return this.http.get<Suggestion[]>(this.apiSuggestion);
    }
  
//to do
    getSuggestionById(id:number){
      return this.http.get<Suggestion>(this.apiSuggestion+"/"+id);
    }

//to do
    addSuggestion(newSugg:Suggestion){
      return this.http.post<Suggestion>(this.apiSuggestion,newSugg);
    }

    deleteSuggestion(id:number){
      return this.http.delete(this.apiSuggestion+"/"+id);
    }
    updateSuggestion(id:number,updatedSugg:Suggestion){
      return this.http.put<Suggestion>(this.apiSuggestion+"/"+id,updatedSugg);
    }
}
