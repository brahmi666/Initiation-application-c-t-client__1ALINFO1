import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Suggestion } from '../../models/suggestion';
import { SuggestionService } from '../../services/suggestion.service';
@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  id!: any;
  titre!: any;
  description!:any;
  category!:any;
  date!:any;
  status!:any;
  likes!:any;

  constructor(private ar: ActivatedRoute, private router: Router, private suggestionService: SuggestionService) {}

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      this.id = params['id'];
      
      if (this.id) {
        this.suggestionService.getSuggestionById(this.id).subscribe({
          next: (data: any) => {
            const sugg = data.suggestion;
            this.titre = sugg.title;
            this.description = sugg.description;
            this.category = sugg.category;
            this.date = sugg.date;
            this.status = sugg.status;
            this.likes = sugg.nbLikes;
            console.log(this.id, "works");
          },
          error: (err) => {
            console.error('Error fetching suggestion details:', err);
          }
        });
      }
    });
  }
  goback() {
    this.router.navigate(['/list-suggestion']);
  }

  suggestion: Suggestion [] = [];
  }
