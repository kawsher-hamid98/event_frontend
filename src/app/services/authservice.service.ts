import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtResponse } from '../jwt-response';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private loginUrl = 'http://localhost:8081/api/auth/signin';
  private signupUrl = 'http://localhost:8081/api/auth/signup';
  private adminUrl = 'http://localhost:8081/api/auth/admin';
  private userUrl = 'http://localhost:8081/rest/admin';
  private restUrl = 'http://localhost:8081/rest';
  constructor(private http: HttpClient) {
  }
 
  registerUser(user) {
    return this.http.post<any>(this.signupUrl, user, httpOptions)
  }

  admin(user) {
    return this.http.post<any>(this.adminUrl, user, httpOptions)
  }


  loginUser(user): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, user, httpOptions);
  }

   getCustomersList(): Observable<any> {
  return this.http.get(`${this.userUrl}`)
   }

   deleteCustomer(id: string): Observable<any> {
     return this.http.delete(`${this.restUrl}/${id}`, {responseType: 'text'});
   }

}
