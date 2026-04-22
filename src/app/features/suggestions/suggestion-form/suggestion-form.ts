import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService } from '../../../services/suggestion.service';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.html',
  styleUrl: './suggestion-form.css',
  standalone : false
})
export class SuggestionFormComponent implements OnInit {
  readonly categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  suggestionForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    const todayFr = this.formatDateFr(new Date());
    this.suggestionForm = this.fb.group({
      titre: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^[A-Z][a-zA-Z]*$/)
        ]
      ],
      description: ['', [Validators.required, Validators.minLength(30)]],
      categorie: ['', Validators.required],
      date: [{ value: todayFr, disabled: false }],
      status: [{ value: 'en attente', disabled: false }]
    });
  }

  private formatDateFr(d: Date): string {
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  showErrors(controlName: string): boolean {
    const c = this.suggestionForm.get(controlName);
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  onSubmit(): void {
    if (this.suggestionForm.invalid) {
      this.suggestionForm.markAllAsTouched();
      return;
    }
    const v = this.suggestionForm.getRawValue();
    const newSugg = new Suggestion();
    newSugg.title = v.titre;
    newSugg.description = v.description;
    newSugg.category = v.categorie;
    newSugg.date = new Date();
    newSugg.status = v.status;
    newSugg.nbLikes = 0;

    this.suggestionService.addSuggestion(newSugg).subscribe({
      next: () => {
        this.router.navigate(['..'], { relativeTo: this.route });
      },
      error: (err) => {
        console.error('erreur lors de l\'ajout',err);
      }
    });
  }

  titreErrors(): ValidationErrors | null | undefined {
    return this.suggestionForm.get('titre')?.errors;
  }

  descriptionErrors(): ValidationErrors | null | undefined {
    return this.suggestionForm.get('description')?.errors;
  }
}
