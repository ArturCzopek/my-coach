import { Component } from '@angular/core';

@Component({
    selector: 'coach-admin',
    template: `
        <div class="container">
            <div class="admin-one-panel">
                <coach-admin-users></coach-admin-users>
            </div>
            <div class="admin-one-panel">
                <coach-admin-app-data></coach-admin-app-data>
                <coach-admin-email></coach-admin-email>
            </div>
        </div>
    `,
    styleUrls: ['./admin.scss']
})
export class AdminComponent {}
