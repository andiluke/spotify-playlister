import {Component, View} from 'angular2/core';

@Component({
  selector: 'gitrepo'
})

@View({
  templateUrl: 'gitrepo.html'
})

export class Gitrepo {

  constructor() {
  	this.name = 'Andi';
    console.info('Gitrepo Component Mounted Successfully');
  }

  clicked() {
  	alert('clicked!');
  }

}
