import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// Get track data from Deezer API
export class DeezerService {
  constructor(private http: HttpClient) {}

  getTrack(uri: string): Observable<any> {
    return this.http.get<any>(uri);
  }
}
