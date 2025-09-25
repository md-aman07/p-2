import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharingDataComponent } from './sharing-data/sharing-data.component';
import { Child1Component } from './home/child1/child1.component';
import { Child2Component } from './home/child2/child2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { OnChangeComponent } from './on-change/on-change.component';
import { NgchildComponent } from './on-change/ngchild/ngchild.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    SharingDataComponent,
    Child1Component,
    Child2Component,
    TodoComponent,
    ViewChildComponent,
    OnChangeComponent,
    NgchildComponent,
    ParentComponent,
    ChildComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
