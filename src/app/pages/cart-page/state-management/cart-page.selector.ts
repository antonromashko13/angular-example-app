import {createSelector} from "@ngrx/store";
import {AppStateModel} from "../../../state-management/app.state";
import {CartPageStateModel} from "./cart-page.state";

const selectCartPage = (state: AppStateModel) => state.cartPage;

export const selectCartProductList = createSelector(
    selectCartPage,
    (state: CartPageStateModel) => state.cartProductList
)
