import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'about/:id/:name', component: AboutComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then((m) => m.ProductsModule), canActivate: [authGuard]
  },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: ErrorComponent, canActivate: [authGuard]},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
