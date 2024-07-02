import { Component } from '@angular/core';
import { AudioService } from './audio.service';
import { DeezerService } from './deezer.service';

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
    'https://api.deezer.com/track/2607856',
    'https://api.deezer.com/track/2603557',
    'https://api.deezer.com/track/3135554',
  ];
  tracks: any[] = [];

  constructor(
    public deezerService: DeezerService,
    public audioService: AudioService
  ) {}

  // Get all tracks from Deezer API
  ngOnInit() {
    this.trackURIs.forEach((uri) => {
      this.deezerService.getTrack(uri).subscribe((data) => {
        //console.log(data);
        this.tracks.push(data);
      });
    });
  }

  // Set and play a new track
  setTrack(index: number) {
    let track = this.tracks[index];

    // Check if same track is already playing
    if (track == this.audioService.currentTrack) {
      return;
    }
    
    this.audioService.setAudio(track);
    this.audioService.playAudio();
  }

  pauseTrack() {
    this.audioService.pauseAudio();
  }

  unpauseTrack() {
    this.audioService.playAudio();
  }
}
