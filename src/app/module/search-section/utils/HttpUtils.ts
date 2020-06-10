import {HttpHeaders} from '@angular/common/http';


export const addHeaders = (): HttpHeaders => {
  let headers = new HttpHeaders();
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Authorization', 'Basic cGxhbmV0OTEwQGdtYWlsLmNvbTpkZXYtMjAyMC1kYWlDYXp6bw==');
  return headers;
}

