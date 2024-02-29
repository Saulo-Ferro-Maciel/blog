import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; 
import { ProjectsComponent } from './pages/projects/projects.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { AbouteMeComponent } from './pages/aboute-me/aboute-me.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'about-me', component: AbouteMeComponent },
  { path: '**', redirectTo: '/404' }
];