import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private apiurl = 'https://api.deezer.com/track/3135556';
  tracks: any[] = [];

  constructor(private http: HttpClient) {}

  getAllTracks(): Observable<any>[] {
    this.tracks.push(this.http.get(this.apiurl));
    console.log(this.http.get(this.apiurl));
    return this.tracks;
  }

  getTrack(): Observable<any> {
    return this.http.get<any>(this.apiurl);
  }
}
