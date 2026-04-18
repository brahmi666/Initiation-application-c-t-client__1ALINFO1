import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuggestionsRoutingModule } from '../features/suggestions/suggestion-form/suggestions-routing.module';

import { ListSuggestion } from '../core/list-suggestion/list-suggestion';
import { Details } from '../core/details/details';
import { SuggestionFormComponent } from '../features/suggestions/suggestion-form/suggestion-form';
import { SuggestionsComponent } from '../features/suggestions/suggestion-form/suggestions';

@NgModule({
  declarations: [
    ListSuggestion,
    Details,
    SuggestionFormComponent,
    SuggestionsComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SuggestionModule { }
