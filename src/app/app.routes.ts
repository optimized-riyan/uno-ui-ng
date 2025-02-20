import { Routes } from '@angular/router';
import { NameFormComponent } from './pages/name-form/name-form.component';
import { MenuComponent } from './pages/menu/menu.component';
import { isNameStoredGuard } from './shared/guards/is-name-stored.guard';
import { TableComponent } from './pages/table/table.component';

export const routes: Routes = [
  { path: 'name', component: NameFormComponent },
  { path: '', redirectTo: '/name', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, canActivate: [isNameStoredGuard] },
  { path: 'table', component: TableComponent },
];
