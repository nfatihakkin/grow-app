import { Routes } from "@angular/router";
import { Dashboard } from "../../pages/dashboard/dashboard";
import { authGuard } from "../../core/guards/auth-guard";

export const dashboardRoutes: Routes = [
    {
        path: '',
        component: Dashboard,
        canActivate: [authGuard]
    }
];