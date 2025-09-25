import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharingDataComponent } from './sharing-data/sharing-data.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TodoComponent } from './todo/todo.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { OnChangeComponent } from './on-change/on-change.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sharing-data', component: SharingDataComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'viewChild', component:ViewChildComponent},
  {path: 'ngOnChange', component: OnChangeComponent},
  {path: 'parent', component: ParentComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
