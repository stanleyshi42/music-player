import { Component } from '@angular/core';
import { AudioService } from './audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'music-player';
  tracks: any[] = [];

  constructor(private service: AudioService) {}

  ngOnInit() {
    this.service.getTrack().subscribe((data) => {
      console.log(data);
      this.tracks = data;
    });
  }
}
