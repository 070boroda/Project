import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostComponent} from "./post/post.module";
import { Post2Component } from './post2/post2.component';
import {FormsModule} from "@angular/forms";
import { PostFormComponent } from './post-form/post-form.component';
import { PostNewComponent } from './post-new/post-new.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
