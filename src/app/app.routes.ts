import { Routes } from '@angular/router';
import { NameFormComponent } from './pages/name-form/name-form.component';
import { MenuComponent } from './pages/menu/menu.component';
import { isNameStoredGuard } from './shared/guards/is-name-stored.guard';

export const routes: Routes = [
  { path: 'name', component: NameFormComponent },
  { path: '', redirectTo: '/name', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, canActivate: [isNameStoredGuard] },
];
