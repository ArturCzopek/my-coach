import {Component, OnInit} from '@angular/core';
import {ProductPreview} from "../shared/entities/PreviewEntites";
import {PRODUCT_PREVIEWS_LIST} from "../shared/entities/mock-data/previews/ProductPreviews";
import {Price} from "../shared/entities/GetEntities";
import {PRICES_LIST} from "../shared/entities/mock-data/Prices";


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
