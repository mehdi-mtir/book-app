import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {
    path: 'book',
    loadChildren: () => import('./book/book.module')
                      .then(m => m.BookModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
                      .then(m => m.UserModule)
  },
  {path:'', redirectTo : 'book', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
