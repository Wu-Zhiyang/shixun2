import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { DeviceComponent } from './home/device/device.component';
import { ScreenComponent } from './home/screen/screen.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'screen', component: ScreenComponent },
      { path: 'product', component: ProductComponent },
      { path: 'device', component: DeviceComponent },
      { path: '**', redirectTo: 'screen' }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
