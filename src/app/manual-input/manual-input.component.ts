import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-input',
  templateUrl: './manual-input.component.html',
  styleUrls: ['./manual-input.component.css']
})
export class ManualInputComponent implements OnInit {
	
	manualInput = [
		//{gid: '', rid: '', name:'', location:'', date:'', purpose:'' }
		{gid: 'GG01', rid: '01', name:'Mulan', location:'Jaipur', date:'08/08/2017', purpose:'To make a man out of you!' }
	];
  
  
  constructor() { }

  ngOnInit() {
  }
  
  manualInputForm(submittedFrom){
  
	console.log('Form submitted!!');
	const newInput={gid:submittedFrom.value.gid, rid:submittedFrom.value.rid, name:submittedFrom.value.name, location:submittedFrom.value.location, date:submittedFrom.value.date, purpose:submittedFrom.value.purpose   };
	this.manualInput.push(newInput);
	submittedFrom.reset();
  }

}
