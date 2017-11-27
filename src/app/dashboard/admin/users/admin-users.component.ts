import { Component, OnInit } from '@angular/core';

import { User } from '../../../shared/entities/get.entities';
import { AdminService } from '../services/admin.service';

@Component({
    selector: 'coach-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['../admin.scss']
})
export class AdminUsersComponent implements OnInit {

    public users = [];

    constructor(
        private adminService: AdminService
    ) {}

    ngOnInit(): void {
        this.adminService
            .getAllUsers()
            .subscribe(
                users => this.users = users,
                error => console.error(error)
            );
    }

    public trackByUserId(index, user: User) {
        return user.userId;
    }
}
