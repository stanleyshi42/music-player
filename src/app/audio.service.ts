import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  currentAudio!: HTMLAudioElement;
  currentTrack!: any;

  setAudio(track: any) {
    // If audio already exists, pause it
    if (this.currentAudio != null) {
      this.currentAudio.pause();
    }

    this.currentTrack = track;
    this.currentAudio = new Audio(track.preview);
    this.currentAudio.volume = 0.25;
  }

  playAudio() {
    this.currentAudio.play();
  }

  pauseAudio() {
    this.currentAudio.pause();
  }
}
