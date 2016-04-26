import {Component, View} from 'angular2/core';

@Component({
  selector: 'footer'
})

@View({
  templateUrl: 'footer.html'
})

export class Footer {

  constructor() {
  	this.name = 'Andi';
    console.info('Footer Component Mounted Successfully');
  }

}
