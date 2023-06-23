import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ProductModel} from "../../shared/models/product.model";
import {CartItemModel} from "../../shared/models/cart.model";

@Component({
    selector: 'app-cart-page-presentation',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss']
})
export class CartPagePresentationComponent implements OnChanges{
    @Input()
    cartProductsList!: ProductModel[];

    cart!: CartItemModel[];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes["cartProductsList"] && this.cartProductsList) {
            this.cart = this.getCartFromProductList(this.cartProductsList);
        }
    }

    getCartFromProductList(productList: ProductModel[]): CartItemModel[] {
        let cart: CartItemModel[] = [];
        productList.forEach((product) => {
            const cartItemIndex = cart.findIndex((cartItem) => cartItem.product.id === product.id);
            if (cartItemIndex >= 0) {
                cart[cartItemIndex].amount++;
            } else {
                cart.push({ product: product, amount: 1 });
            }
        })
        return cart;
    }

}