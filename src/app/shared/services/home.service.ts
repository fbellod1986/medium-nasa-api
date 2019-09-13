import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiKey = '2RYIA7T0trVt8XhgVHR0JVzdasIaLcpv32N0JRKd';
  private api = environment.url + this.apiKey;

  constructor(private http: HttpClient) { }

  get(query: string) {
    const url = this.api + query;
    return this.http.get(url);
  }

}
