import { Component, OnInit } from '@angular/core';
import {HttpModule}	from '@angular/http';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

	workFlowOptions=[
		{display:'1 War approval', value:'1'},
		{display:'2 War approvals', value:'2'},
		{display:'2 Co-War approvals', value:'2co'},
		{display:'2 War initiators', value:'2makers'}
	]
  constructor() { }

  ngOnInit() {
  }

}
