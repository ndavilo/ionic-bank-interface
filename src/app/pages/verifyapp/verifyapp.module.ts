import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyappPageRoutingModule } from './verifyapp-routing.module';

import { VerifyappPage } from './verifyapp.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [VerifyappPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VerifyappPageRoutingModule,
        ComponentsModule
    ]
})
export class VerifyappPageModule {}
