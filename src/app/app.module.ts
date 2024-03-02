import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component'; 
import { ProjectsComponent } from './pages/projects/projects.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { AbouteMeComponent } from './pages/aboute-me/aboute-me.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
   // HomeComponent,
   // ProjectsComponent,
    //ArticlesComponent,
    //AbouteMeComponent,
    //MenuBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }



