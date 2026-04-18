import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestion } from '../core/list-suggestion/list-suggestion';
import { Details } from '../core/details/details';
import { SuggestionFormComponent } from '../features/suggestions/suggestion-form/suggestion-form';

const routes: Routes = [
  { path: '', component: ListSuggestion },
  { path: 'ajouter', component: SuggestionFormComponent },
  { path: 'detail/:id', component: Details },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestionRoutingModule {}
