import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  id!: any;

  constructor(private ar: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      this.id = params['id'];

    });
  }
  goback() {
    this.router.navigate(['/list-suggestion']);
  }

  suggestion: Suggestion [] = [];
  }
