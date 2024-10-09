import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (): boolean => {
  const router: Router = inject(Router);

  const { login, password } = JSON.parse(localStorage.getItem('userLoginAndPassword')!)

  if(login === "admin" && password === "1234") return true;

  router.navigate(['/login']).catch();
  return false;
};
