import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './app-shell.component';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [],
  },
];

@NgModule({
  declarations: [AppShellComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IonicModule],
})
export class AppShellModule {}
