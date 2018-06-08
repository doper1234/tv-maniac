import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './tv/search/search.component';
import {ContactComponent} from './pages/contact/contact.component';
import {Page404Component} from './pages/page404/page404.component';
import {ShowDetailsComponent} from './tv/show-details/show-details.component';
import {ShowDetailsResolver} from './tv/show-details/show-details.resolver';
import {ShowDetails} from './shared/models/tv.models';
// import {HasRolesGuard} from './shared/has-roles.guard';
// import {MainSettingsComponent} from './settings/main-settings/main-settings.component';
import {ClientAreaComponent} from './dynamic/client-area/client-area.component';

export interface ShowDetailsParams {
  id: string;
}

export interface ShowDetailsData {
  show: ShowDetails;
  roles: string[];
}

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tv', component: SearchComponent},
  {
    path: 'tv/:id',
    component: ShowDetailsComponent,
    resolve: {
      show: ShowDetailsResolver
    },
    data: {
      roles: ['admin', 'editor']
    },
    canActivate: [
      // HasRolesGuard,
    ]
  },
  // lazy loading
  {path: 'settings', loadChildren: './settings/settings.module#SettingsModule'},
  {path: 'client', component: ClientAreaComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, preloadingStrategy: PreloadAllModules})],
  providers: [ShowDetailsResolver],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
