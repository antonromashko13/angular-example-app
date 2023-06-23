import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../shared/models/product.model";
import {ProductTypeModel} from "../../shared/models/product-type.model";
import {Subject, debounceTime} from "rxjs";
import {FiltersModel} from "../../shared/models/filters.model";

@Component({
    selector: 'app-product-list-page-presentation',
    templateUrl: './product-list-page.component.html',
    styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPagePresentationComponent implements OnInit, OnDestroy {
    private filtersChanged: Subject<FiltersModel> = new Subject<FiltersModel>();

    @Input()
    productList!: ProductModel[];

    @Input()
    productTypes!: ProductTypeModel[];

    @Output('onFiltersChange')
    onFiltersChangeEmitter = new EventEmitter();

    typeId: number = 0;
    minPrice: number = 0;
    maxPrice: number = 250;

    ngOnInit(): void {
        this.filtersChanged
            .pipe(debounceTime(500))
            .subscribe(() => {
                this.onFiltersChange()
            });
    }

    onFiltersChange() {
        this.onFiltersChangeEmitter.emit(this.getFilters());
    }

    filtersFormChanged() {
        this.filtersChanged.next(this.getFilters());
    }

    getFilters(): FiltersModel {
        return {
            typeId: this.typeId,
            minPrice: this.minPrice,
            maxPrice: this.maxPrice
        }
    }

    ngOnDestroy(): void {
        this.filtersChanged.complete();
    }
}