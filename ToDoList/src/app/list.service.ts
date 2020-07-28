import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  list= [
    {_id: 1, content:"this is my content", date:"today"},
    {_id: 2, content:"another note", date:"today"},
    {_id: 3, content:"note #3", date:"today"}
  ];


  constructor() { }
  // basic list method
  listList(){
    return this.list;
  }
  // "getOne" method, returns item from the array with _id == id
  getList(id){
    return this.list.find((el) => {return el._id == id});
  }
}
