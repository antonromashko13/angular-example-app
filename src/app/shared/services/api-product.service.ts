import {Inject, Injectable} from '@angular/core';
import {API_BASE_URL} from "../../app.module";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {ProductModel} from "../models/product.model";
import {ProductTypeModel} from "../models/product-type.model";
import {FiltersModel} from "../models/filters.model";
import {AuthService} from "../../auth/auth.service";
import {map} from "rxjs/operators";

interface UserWithProductsRequestModel {
    email: string,
    password: string,
    id: number,
    productsId: number[],
    products: ProductModel[],
}

@Injectable({
    providedIn: 'root'
})
export class ApiProductService {
    apiBaseUrl: string;

    constructor(@Inject(API_BASE_URL) apiBaseUrl: string,
                private http: HttpClient,
                private authService: AuthService,
    ) {
        this.apiBaseUrl = apiBaseUrl;
    }

    // product/list
    getProductList(filters?: FiltersModel): Observable<ProductModel[]> {
        let filtersArr: { name: string; value: string | number }[] = [];
        if (filters?.typeId) { filtersArr.push({ name: "typeId", value: filters.typeId }); }
        if (filters?.minPrice) { filtersArr.push({ name: "price_gte", value: filters.minPrice }); }
        if (filters?.maxPrice) { filtersArr.push({ name: "price_lte", value: filters.maxPrice }); }

        let filtersString = filtersArr.length
            ? filtersArr.reduce((filtersString: string, filter: any, index) =>
                filtersString += filter.name + '=' + filter.value + (index+1 !== filtersArr.length ? '&' : '')
            , '&')
            : '';

        return this.http.get<ProductModel[]>(this.apiBaseUrl + '/products' + '?expand=type'+ filtersString)
    }

    // product/info/{id}
    getProduct(productId: number): Observable<ProductModel> {
        return this.http.get<ProductModel>(this.apiBaseUrl + `/products/${productId}` + '?expand=type');
    }

    getProductTypes(): Observable<ProductTypeModel[]> {
        return this.http.get<ProductTypeModel[]>(this.apiBaseUrl + `/types`);
    }

    // goods/add/{idProduct} (for current user)
    addProductToCart(productId: number): Observable<null | ProductModel> {
        const userId = this.authService.getUserId();
        if (!userId) return of(null);

        this.http.get<UserWithProductsRequestModel>(this.apiBaseUrl + `/users/${userId}` + '?expand=products')
            .pipe(map((user) => user.productsId))
            .subscribe( (currentProductsId) =>
                this.http.put<UserWithProductsRequestModel>(this.apiBaseUrl + `/users/${userId}`, {
                    email: this.authService.getUserEmail(),
                    password: this.authService.getUserPassword(),
                    productsId: currentProductsId ? [...currentProductsId, productId] : [productId]
                }).subscribe()
        );
        return this.getProduct(productId);
    }

    // goods/list (for current user)
    getUserProducts(): Observable<ProductModel[] | null> {
        const userId = this.authService.getUserId();
        if (!userId) return of(null);

        return this.http.get<UserWithProductsRequestModel>(this.apiBaseUrl + `/users/${userId}` + '?expand=products').pipe(
            map((user) => user.products),
        );
    }
}