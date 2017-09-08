import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ManualInputComponent } from './manual-input/manual-input.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes=[
	{path:'', component:FileUploadComponent},
	{path:'manual-upload', component:ManualInputComponent},
	{path:'file-upload', component:FileUploadComponent},
	{path:'**', redirectTo:'/'}
	
]

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    ManualInputComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
