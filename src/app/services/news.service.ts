import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey = 'f6d8c08b676441ab8ef9564885aa8501';
  constructor(private http: HttpClient) { }
  getArticles() {
    return this.http.get( 'https://newsapi.org/v2/top-headlines?country=ua&apiKey=' + this.apiKey);
  }
    getArticleByID(source: string) {
      return this.http.get( 'https://newsapi.org/v2/top-headlines?country=' + source + '&apiKey' + this.apiKey);
    }
}
