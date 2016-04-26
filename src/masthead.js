import { Component } from 'angular2/core';
import { TestChild } from 'testchild';

@Component({
  	selector: 'masthead',
	templateUrl: 'masthead.html',
  	directives: [TestChild]
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
