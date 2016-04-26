import { Component, View } from 'angular2/core';

@Component({
  selector: 'testchild'
})

@View({
  template: `<div>Test Child</div>`
})

export class TestChild {

  constructor() {
  	this.name = 'Andi';
    console.info('Testchild Component Mounted Successfully');
  }

}
