import { Routes } from "@angular/router";
import { authGuard } from "../shared/services/auth.guard";
import { FashionComponent } from "./fashion/fashion.component";

export const homeRoutes: Routes = [
    { path: 'fashion', canActivate: [authGuard], component: FashionComponent, title: 'Home Fashion' },
    { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
];