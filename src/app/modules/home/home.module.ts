import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'index', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', redirectTo: 'index' },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
