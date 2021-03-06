import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalciService {
  configUrl = 'assets/buttons.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.configUrl);
  }


}
