import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'folder', pathMatch: 'full' },
  { path: 'folder', loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule) },
  { path: 'sobre', loadChildren: () => import('./sobre/sobre.module').then(m => m.SobrePageModule) },
  { path: 'simbolos', loadChildren: () => import('./simbolos/simbolos.module').then(m => m.SimbolosPageModule) },
 
 
  { path: 'alerta', loadChildren: () => import('./alerta/alerta.module').then(m => m.AlertaPageModule) },
  
  
  { path: 'folder', loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule) },
    { path: 'social', loadChildren: () => import('./social/social.module').then(m => m.SocialPageModule) },

  
    { path: 'direitos', loadChildren: () => import('./direitos/direitos.module').then(m => m.DireitosPageModule) },
  {
    path: 'desenvolvedores',
    loadChildren: () => import('./desenvolvedores/desenvolvedores.module').then( m => m.DesenvolvedoresPageModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
