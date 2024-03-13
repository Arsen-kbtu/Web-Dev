import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsdetailComponent } from './albumsdetail/albumsdetail.component';
import { AboutComponent } from './about/about.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: "full"},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'albums/:id', component: AlbumsdetailComponent },
    
];
