import {Component, View} from 'angular2/core';

@Component({
  selector: 'masthead'
})

@View({
  templateUrl: 'masthead.html'
})

export class Masthead {

  constructor() {
  	this.name = 'Andi';
    console.info('Masthead Component Mounted Successfully');
  }

}
