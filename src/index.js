import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Gitrepo} from 'gitrepo';

@Component({
  selector: 'main'
})

@View({
  directives: [Gitrepo],
  template: `
    <gitrepo></gitrepo>
  `
})

class Main {

}

bootstrap(Main);
