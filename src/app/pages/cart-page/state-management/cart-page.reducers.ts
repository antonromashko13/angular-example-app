import {initialCartPageState} from "./cart-page.state";
import {CartPageActions, ECartPageActions} from "./cart-page.actions";

export const cartPageReducers = (
    state = initialCartPageState,
    action: CartPageActions
) => {
    switch (action.type) {
        case ECartPageActions.SetCartProductList: {
            return {
                ...state,
                cartProductList: action.payload
            };
        }
        case ECartPageActions.AddProductToCart: {
            return {
                ...state,
                cartProductList: [...state.cartProductList, action.payload]
            };
        }

        default:
            return state;
    }
}