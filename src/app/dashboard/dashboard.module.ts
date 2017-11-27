import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { WeightsModule } from './weights/weights.module';
import { ReportsModule } from './reports/reports.module';
import { TrainingsModule } from './trainings/tranings.module';
import { PricesModule } from './prices/prices.module';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { DashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
    declarations: [
        AboutComponent,
        DashboardComponent,
        HeaderComponent,
        SettingsComponent,
    ],
    imports: [
        AdminModule,
        CommonModule,
        DashboardRouting,
        FormsModule,
        HttpModule,
        PricesModule,
        ReportsModule,
        SharedModule,
        TrainingsModule,
        WeightsModule,
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {}
