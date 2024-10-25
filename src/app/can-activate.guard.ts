import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../app/Services/login.service';
import { Router } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  console.log(router.url);
  if (loginService.isAuthenticated()) {
    return true; // The user can navigate to the route
  } else {
    router.navigate(['login']);
    return false; // The user can't navigate to the route
  }
};
