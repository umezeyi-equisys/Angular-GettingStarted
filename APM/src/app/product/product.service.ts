import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from "./product";
import { Observable, catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products:IProduct[] = [];

    constructor(private http:HttpClient) {
    }

    getProducts(): Observable<IProduct[]> {
        const url:string = '/api/products/products.json';
        return this.http.get<IProduct[]>(url).pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    } // getProducts()

    private handleError(err:HttpErrorResponse) {
        
        let msg = '';
        if (err.error instanceof ErrorEvent)
            msg = `An error occured ${err.error.message}`;
        else
            msg = `Server returned code: ${err.status}, error message is: ${err.message}`;

        console.error(msg)
        return throwError(()=>msg);

    }  // handleError()

} // END CLASS //