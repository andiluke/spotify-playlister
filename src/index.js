import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Masthead} from 'masthead';
import {Gitrepo} from 'gitrepo';
import {SpotifyAuth} from 'spotify-auth';
import {Footer} from 'footer';

@Component({
  selector: 'main'
})

@View({
  directives: [Masthead, Gitrepo, SpotifyAuth, Footer],
  templateUrl: 'layout.html'
})

class Main {

}

bootstrap(Main);
