import {createSelector} from "@ngrx/store";
import {AppStateModel} from "../../../state-management/app.state";
import {ProductDetailPageStateModel} from "./product-detail-page.state";

const selectProductDetailPage = (state: AppStateModel) => state.productDetail;

export const selectProduct = createSelector(
    selectProductDetailPage,
    (state: ProductDetailPageStateModel) => state.product
)
