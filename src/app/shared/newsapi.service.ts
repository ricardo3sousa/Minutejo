import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  private api = {
    key: 'fff5e89fd71942f689e07162474ccafc',
    base: 'https://newsapi.org/v2/top-headlines?category=',
    options: '&country=pt&pageSize=12&apiKey=',
  }

  constructor(private http: HttpClient) { 
  }

  getArticle(category):Observable<any>{
    const url = `${this.api.base}${category}${this.api.options}${this.api.key}`;
    return this.http.get(url);
  }

  
}
