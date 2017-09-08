import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

   @Input() fileInitialName: any;
   @Input() fileFullPath: any;
   fileReader:FileReader;
	 
  csvData: any[] = [];
  constructor(private http: Http) { }

  ngOnInit() {
  }

	convertFile(submittedForm){
		this.fileInitialName = event.target;
		this.fileFullPath=this.fileInitialName[0].value;
		const input = (<HTMLInputElement>document.getElementById('fileInput'));
				const reader = new FileReader();
				reader.onload = () => {
					let text = reader.result;
					this.csvData =text.split(",");
					console.log(this.csvData);
					console.log('CSV: ', text.substring(0, 100) + '...');
					
					//convert text to json here
					//var json = this.csvJSON(text);
					//console.log(json);
				};
				reader.readAsText(input.files[0]);		
	};
	
	//Next step: convert files to JSON object
}
