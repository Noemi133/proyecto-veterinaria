import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const autenticado = localStorage.getItem('login');

  if (autenticado === 'true') {

    return true;

  }

  router.navigate(['']);

  return false;

};