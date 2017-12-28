
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
} from '@angular/material';


@NgModule({
    declarations: [
        ProductListComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [],
    bootstrap: []
})
export class ProductsModule {

}
