import { Routes } from '@angular/router';
import { UserNew } from './features/users/new';
import { UserDetail } from './features/users/item';
import { UserApp } from './features/users';
export const routes: Routes = [
    { path: '', component: UserApp },
    {
        path: 'new',
        component: UserNew
    },
    {
        path: 'user/:id',
        component: UserDetail
    }
];
