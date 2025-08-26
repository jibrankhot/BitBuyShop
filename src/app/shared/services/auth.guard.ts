import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);

  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  const publicRoutes = ['login', 'register', 'forgot'];

  if (isLoggedIn && publicRoutes.includes(route.routeConfig?.path || '')) {
    router.navigate(['/pages/profile']);
    return false;
  }

  const protectedRoutes = ['profile', 'checkout', 'contact', 'coupons'];
  if (!isLoggedIn && protectedRoutes.includes(route.routeConfig?.path || '')) {
    alert('Not a valid user. Please login first!');
    router.navigate(['/pages/login']);
    return false;
  }

  return true;
};
