import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PicturesComponent } from './pictures/pictures.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'pictures', component: PicturesComponent },
    { path: 'movies', component: MoviesComponent }
];
