import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions';
import { SuggestionFormComponent } from './suggestion-form';
import { ListSuggestion } from '../../../core/list-suggestion/list-suggestion';
import { Details } from '../../../core/details/details';

const routes: Routes = [
  {
    path: '',
    component: SuggestionsComponent,
    children: [
      { path: '', component: ListSuggestion },
      { path: 'ajouter', component: SuggestionFormComponent },
      { path: 'detail/:id', component: Details }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule {}
