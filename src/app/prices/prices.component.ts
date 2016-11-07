import {Component, OnInit} from '@angular/core';
import {ProductPreview} from "../shared/entities/preview.entities";
import {PRODUCT_PREVIEWS_LIST} from "../shared/entities/mock-data/previews/product-previews.mock-data";
import {Price} from "../shared/entities/get.entities";
import {PRICES_LIST} from "../shared/entities/mock-data/prices.mock-data";


@Component({
    selector: 'coach-prices',
    templateUrl: './prices.component.html',
    styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    getProducts(): ProductPreview[] {
        return PRODUCT_PREVIEWS_LIST;
    }

    getProductPrices(productPreview: ProductPreview): Price[] {
      return PRICES_LIST[productPreview.productId];
    }
}
