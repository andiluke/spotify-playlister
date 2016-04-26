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
  	this.navItems = [
  		{
  			label: 'first',
  			link: '#first'
  		},
  		{
  			label: 'second',
  			link: '#2'
  		},
  		{
  			label: 'third',
  			link: '#3'
  		}
  	];
    console.info('Masthead Component Mounted Successfully');
  }

}
