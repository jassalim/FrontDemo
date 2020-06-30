import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  public host :string="http://localhost:8082"
  constructor(private http: HttpClient) { }
  public getResource(url){
    return this.http.get(this.host+url);
  }
}
