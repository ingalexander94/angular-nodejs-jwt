import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TaskPublicComponent } from './components/task-public/task-public.component';
import { TaskPrivateComponent } from './components/task-private/task-private.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: "/entrar", pathMatch: "full" },
  { path: 'entrar', component: SigninComponent },
  { path: 'registrar', component: SignupComponent },
  { path: 'tareasPublicas', component: TaskPublicComponent },
  { path: 'tareasPrivadas',canActivate: [AuthGuard] , component: TaskPrivateComponent },
  { path: '**', redirectTo: "/entrar" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
