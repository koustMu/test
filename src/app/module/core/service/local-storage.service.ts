import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LogService} from './log.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {CountryResponse} from '../api/Response';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  scrollPosition$ = new BehaviorSubject<[number, number]>(null);

  constructor(private http: HttpClient, private logger: LogService) {
  }

  public getCountries(): Observable<CountryResponse> {
    this.logger.log('Call getCountries');
    return this.http.get<CountryResponse>(`/api/common/countries`);
  }
}
