import {initialProductListPageState} from "./product-list-page.state";
import {EProductListPageActions, ProductListPageActions} from "./product-list-page.actions";

export const productListPageReducers = (
    state = initialProductListPageState,
    action: ProductListPageActions
) => {
    switch (action.type) {
        case EProductListPageActions.SetProductList: {
            return {
                ...state,
                productList: action.payload
            };
        }
        case EProductListPageActions.SetProductTypes: {
            return {
                ...state,
                productTypes: [ {id: 0, name: 'All'}, ...action.payload]
            };
        }

        default:
            return state;
    }
}