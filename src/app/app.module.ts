import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';

import { ViewerComponent } from './PdfViewer/viewer.component';


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, PdfViewerComponent, ViewerComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
