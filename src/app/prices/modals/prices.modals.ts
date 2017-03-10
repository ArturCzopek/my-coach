/* tslint:disable:component-class-suffix */
import {Component} from "@angular/core";

@Component({
  selector: 'coach-prices-modals',
  template: `
    <coach-price-add-modal></coach-price-add-modal>
    <coach-prices-delete-modal></coach-prices-delete-modal>
    <coach-prices-edit-modal></coach-prices-edit-modal>
    <coach-product-add-modal></coach-product-add-modal>
    <coach-product-delete-modal></coach-product-delete-modal>
    <coach-product-edit-modal></coach-product-edit-modal>
    <coach-shopping-list-modal></coach-shopping-list-modal>
  `
})
export class PricesModals {

}
