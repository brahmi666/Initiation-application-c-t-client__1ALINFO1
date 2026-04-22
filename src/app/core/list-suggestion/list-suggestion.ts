import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuggestionService } from '../../services/suggestion.service';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  standalone: false,
  templateUrl: './list-suggestion.html',
  styleUrl: './list-suggestion.css',
})
export class ListSuggestion implements OnInit {
  suggestions: Suggestion[] = [];
    favoriteSuggestions: Suggestion[] = [];
     searchTerm: string = '';
  router: any;


  constructor (private SuggestionService:SuggestionService){}

  ngOnInit(): void {
    this.SuggestionService.getAllSuggestions().subscribe(
      {
        next:(data:any)=>{
         
          this.suggestions = data.suggestions || data;
        }
      }
    )
    };
    
  likeSuggestion(suggestion: Suggestion) {
    suggestion.nbLikes++;
  }
  
  addToFavorites(suggestion: Suggestion) {
    if (!this.favoriteSuggestions.includes(suggestion)) {
      this.favoriteSuggestions.push(suggestion);
    }
  }

  get filteredSuggestions(): Suggestion[] {
    if (!this.searchTerm) {
      return this.suggestions;
    }
    const lowerSearch = this.searchTerm.toLowerCase();
    return this.suggestions.filter(s => 
      s.title.toLowerCase().includes(lowerSearch) || 
      s.category.toLowerCase().includes(lowerSearch)
    );
  }
  }

 


