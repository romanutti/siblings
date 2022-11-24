import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildOneComponent } from './child-one/child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two/child-two.component';
import { ParentDirective } from './parent/parent.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ParentDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
