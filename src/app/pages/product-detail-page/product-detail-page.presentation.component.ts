import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from "../../shared/models/product.model";

@Component({
    selector: 'app-product-detail-page-presentation',
    templateUrl: './product-detail-page.component.html',
    styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPagePresentationComponent {
    @Input()
    product!: ProductModel | null;

    @Input()
    isLogged: boolean = false;

    @Output()
    onAddProductToCartClick = new EventEmitter<number>();

    addProductToCart(id: number) {
        this.onAddProductToCartClick.emit(id);
    }
}