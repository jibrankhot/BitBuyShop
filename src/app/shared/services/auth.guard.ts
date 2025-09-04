import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(Auth);

  return new Promise<boolean>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      const path = route.routeConfig?.path || '';

      const publicRoutes = ['login', 'register', 'forgot'];
      const protectedRoutes = ['profile', 'checkout', 'contact', 'coupons'];

      if (user && publicRoutes.includes(path)) {
        router.navigate(['/pages/profile']);
        resolve(false);
      } else if (!user && protectedRoutes.includes(path)) {
        alert('Not a valid user. Please login first!');
        router.navigate(['/pages/login']);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};
