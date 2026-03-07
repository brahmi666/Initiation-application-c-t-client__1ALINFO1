import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { ListSuggestion } from './core/list-suggestion/list-suggestion';
import { FormsModule } from '@angular/forms';
import { Home } from './core/home/home';
import { Notfound } from './core/notfound/notfound';
import { Details } from './core/details/details';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    ListSuggestion,
    Home,
    Notfound,
    Details
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
