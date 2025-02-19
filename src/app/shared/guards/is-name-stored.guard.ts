import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isNameStoredGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('name')) {
    return true;
  } else {
    router.navigate(['/name']);
    return false;
  }
};
