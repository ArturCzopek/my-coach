import { Component } from '@angular/core';

@Component({
    selector: 'coach-dashboard',
    template: `
        <coach-header></coach-header>
        <router-outlet></router-outlet>
    `
})
export class DashboardComponent {}
