import { IonicModule } from '@ionic/angular';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { SlidesComponent } from './slides/slides.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SlidesComponent,
    LogoComponent,
    StartComponent
  ],
  exports: [
    SlidesComponent,
    LogoComponent,
    StartComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
