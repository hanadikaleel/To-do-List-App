import { Component, OnInit } from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class AppComponent {
  constructor(private listService: ListService) {

  }
  listList= null;
  coursename="CSCIE31"

ngOnInit(){
  this.listList= this.listService.listList();
}
}
