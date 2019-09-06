import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
