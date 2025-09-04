import { Routes } from "@angular/router";
import { authGuard } from "../shared/services/auth.guard";
import { HomeComponent } from "./home.component";

export const homeRoutes: Routes = [
    { path: 'fashion', canActivate: [authGuard], component: HomeComponent, title: 'Home Fashion' },
    { path: '', redirectTo: 'fashion', pathMatch: 'full' }
];
