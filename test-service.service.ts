import { Injectable } from '@angular/core';
import { DataInterface } from './test-interface';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'

// created using ng generate service "X"
@Injectable()
export class TestServiceService 
{
    private test_url = "testURl"
    constructor(private _http: Http ) {  }
    
    get TestInfo(): A type {
        // GET DATA FROM OUR API
    }
}
