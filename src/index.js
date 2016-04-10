import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Gitrepo} from 'gitrepo';
import {SpotifyAuth} from 'spotify-auth';

@Component({
  selector: 'main'
})

@View({
  directives: [Gitrepo, SpotifyAuth],
  templateUrl: 'layout.html'
})

class Main {

}

bootstrap(Main);
