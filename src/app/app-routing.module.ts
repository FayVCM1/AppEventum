import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slide',
    pathMatch: 'full'
  },
  {
    path: 'slide',
    loadChildren: () => import('./pages/slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./pages/favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then( m => m.FilterPageModule)
  },  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
