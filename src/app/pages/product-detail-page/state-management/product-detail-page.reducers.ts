import {initialProductDetailPageState} from "./product-detail-page.state";
import {EProductDetailPageActions, ProductDetailPageActions} from "./product-detail-page.actions";

export const productDetailPageReducers = (
    state = initialProductDetailPageState,
    action: ProductDetailPageActions
) => {
    switch (action.type) {
        case EProductDetailPageActions.SetProduct: {
            return {
                ...state,
                product: action.payload
            };
        }

        default:
            return state;
    }
}