import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile' , component: ProfileComponent}
];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);