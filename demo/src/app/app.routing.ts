import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DefaultComponent } from './default';
import { GettingStarted } from './getting-started';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: DefaultComponent },
  { path: 'getting-started', component: GettingStarted },
  { path: 'components', loadChildren: './components/index#NgbdDemoModule'},
  // { path: 'components', pathMatch: 'full', redirectTo: 'components/accordion' },
  { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, enableTracing: false });
/*
{ path: 'components', pathMatch: 'full', redirectTo: 'components/accordion' },

Route {
    path?: string;
    pathMatch?: string;
    matcher?: UrlMatcher;
    component?: Type<any>;
    redirectTo?: string;
    outlet?: string;
    canActivate?: any[];
    canActivateChild?: any[];
    canDeactivate?: any[];
    canLoad?: any[];
    data?: Data;
    resolve?: ResolveData;
    children?: Routes;
    loadChildren?: LoadChildren;
    runGuardsAndResolvers?: RunGuardsAndResolvers;
}
app/components/timepicker.module#NgbdTimepickerModule
*/