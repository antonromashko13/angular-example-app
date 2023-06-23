import {createSelector} from "@ngrx/store";
import {AppStateModel} from "../../../state-management/app.state";
import {ProductListPageStateModel} from "./product-list-page.state";

const selectProductListPage = (state: AppStateModel) => state.productListPage;

export const selectProductList = createSelector(
    selectProductListPage,
    (state: ProductListPageStateModel) => state.productList
)

export const selectProductTypes = createSelector(
    selectProductListPage,
    (state: ProductListPageStateModel) => state.productTypes
)