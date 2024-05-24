import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  

  privacyPolicySections: any[] = [];

  constructor(private http: HttpClient) { }
  url = 'https://laundryholic.com/laundryholic/webapi/F-Privacy-Policy.php';
  // url = 'https://jsonplaceholder.typicode.com/posts';
  
  ngOnInit(): void {
    this.fetchPrivacyPolicy();
  }

  fetchPrivacyPolicy() {
   return this.http.get(this.url);
  }
}
