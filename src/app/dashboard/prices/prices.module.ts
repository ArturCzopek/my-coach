import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PricesListComponent } from './prices-list.component';
import { PricesMockService } from './services/prices.mock.service';
import { PricesBackEndService } from './services/prices.back-end.service';
import { SharedModule } from '../../shared/shared.module';
import { PricesModalsService } from './services/prices-modals.service';
import { PricesCardComponent } from './prices-card.component';
import { PricesModals } from './modals/prices.modals';
import { ProductAddModal } from './modals/product-add/product-add.modal';
import { PriceAddModal } from './modals/prices-add/price-add.modal';
import { PricesEditModal } from './modals/prices-edit/prices-edit.modal';
import { ProductEditModal } from './modals/product-edit/product-edit.modal';
import { ProductDeleteModal } from './modals/product-delete/product-delete.modal';
import { PricesDeleteModal } from './modals/prices-delete/prices-delete.modal';
import { ShoppingListModal } from './modals/shopping-list.modal';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
    declarations: [
        PricesListComponent,
        PricesCardComponent,
        PricesModals,
        PriceAddModal,
        PricesDeleteModal,
        PricesEditModal,
        ProductAddModal,
        ProductDeleteModal,
        ProductEditModal,
        ShoppingListModal,
    ],
    imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        SharedModule,
        LazyLoadImageModule
    ],
    providers: [
        PricesMockService,
        PricesBackEndService,
        PricesModalsService
    ],
    exports: [
        PricesListComponent
    ]
})
export class PricesModule {}
