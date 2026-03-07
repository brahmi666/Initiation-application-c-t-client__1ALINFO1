import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestion } from './core/list-suggestion/list-suggestion';
import { Home } from './core/home/home';
import { Notfound } from './core/notfound/notfound';
import { Details } from './core/details/details';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: Home },
  { path: 'list-suggestion', component: ListSuggestion },
  { path: 'details/:id', component: Details  },
  { path: '**', component: Notfound },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
