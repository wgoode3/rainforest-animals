import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  animals : any = [];
  filter : any = [];
  q : string = "";

  constructor(private _http : HttpService) { }

  ngOnInit() {
    let observable = this._http.getAnimals();
    observable.subscribe(data => {
      this.animals = data;
      this.filter = data;
    });
  }

  s(e) {
    let temp = [];
    for(let animal of this.animals) {
      if(animal['name'].toLowerCase().includes(e.toLowerCase())) {
        temp.push(animal);
      }
    }
    this.filter = temp;
  }

}
