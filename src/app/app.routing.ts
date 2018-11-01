import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent},
    { path: 'profile' , component: ProfileComponent},
    { path: 'admin', component : AdminComponent}
];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);