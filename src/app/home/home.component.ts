import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

interface Person{
  name: string;
  age: number;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
 readonly router = inject(Router)

 Ontodo(){
  this.router.navigate(['/todo']);
 }

  value = 5; //sending value to child component

  person: Person = {
    name: 'aman',
    age: 22,
  };

  msg1: string = '';
  recevingMessage(msg: string) {
    this.msg1 = msg;
  }
   num: number = 0;
  receiving_number(number: number){
    this.num = number;
  }
}
