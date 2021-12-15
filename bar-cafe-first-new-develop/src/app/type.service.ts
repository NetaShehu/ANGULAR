import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypeInterface} from "./typeInterface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private _url1: string = "/assets/data/te_ngrohta.json";
  private _url2: string = "/assets/data/te_ftohta.json";
  private _url3: string = "/assets/data/te_tjera.json";

  constructor(private http:HttpClient) { }

  getType1(): Observable<TypeInterface[]>{
    return this.http.get<TypeInterface[]>(this._url1);
    }
  getType2(): Observable<TypeInterface[]>{
    return this.http.get<TypeInterface[]>(this._url2);

    }
  getType3(): Observable<TypeInterface[]>{
    return this.http.get<TypeInterface[]>(this._url3);
}


  }






