import {Component, View} from 'angular2/core';

@Component({
  selector: 'spotify-auth'
})

@View({
  templateUrl: 'spotify-auth.html'
})

export class SpotifyAuth {

  constructor() {
  	this.name = 'Andi';
    console.info('Spotify Auth Component Mounted Successfully');
  }

  

}
