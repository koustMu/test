import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserResponse} from '../api/UserResponse';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  private user$ = new BehaviorSubject<UserResponse>(null);
  onChangeUser$ = this.user$.asObservable();

  public getUserInfo(): Observable<UserResponse> {
    return this.http.get<UserResponse>('/api/users/userinfo').pipe(
      map(
        (data) => {
          this.user$.next(data);
          return data;
        }
      )
    );
  }

  public updateUserInfoData(updateUserInfo: {
    city: string, country: string, firstName: string, lastName: string, phoneNumber: string
  }): Observable<UserResponse> {
    return this.http.put<UserResponse>('/api/users/userinfo', updateUserInfo).pipe(
      map(
        (data) => {
          this.user$.next(data);
          return data;
        }
      )
    );
  }

}
