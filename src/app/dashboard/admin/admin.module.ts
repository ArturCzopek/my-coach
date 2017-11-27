import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminUsersComponent } from './users/admin-users.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminUserCardComponent } from './admin-user-card.component';
import { AdminAppDataComponent } from './admin-app-data.component';
import { AdminEmailComponent } from './email/admin-email.component';
import { AdminService } from './services/admin.service';

@NgModule({
    declarations: [
        AdminComponent,
        AdminUsersComponent,
        AdminUserCardComponent,
        AdminAppDataComponent,
        AdminEmailComponent
    ],
    imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    providers: [
        AdminService
    ],
    exports: [
        AdminComponent
    ]
})
export class AdminModule {}
