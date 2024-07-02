import { Component } from '@angular/core';
import { AudioService } from './audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'music-player';
  trackURIs = [
    'https://api.deezer.com/track/3135556',
    'https://api.deezer.com/track/12209331',
    'https://api.deezer.com/track/9997018',
    'https://api.deezer.com/track/117580376',
  ];
  tracks: any[] = [];

  constructor(private service: AudioService) {}

  ngOnInit() {
    this.trackURIs.forEach((uri) => {
      this.service.getTrack(uri).subscribe((data) => {
        console.log(data);
        this.tracks.push(data);
      });
    });
  }
}
