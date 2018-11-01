import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'profile' , component: ProfileComponent , canActivate: [AuthGuard]},
    { path: 'admin', component : AdminComponent , canActivate: [AuthGuard]}
];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);