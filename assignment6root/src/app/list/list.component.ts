import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private _content;

  @Input() list;


  constructor() {
    this._content= '[ no title set]'
  }

  ngOnInit(): void{
  }

}
