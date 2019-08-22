import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  animal : any = {};
  errors : any = {};

  constructor(private _http : HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addAnimal() {
    console.log(this.animal);
    let observable = this._http.createAnimal(this.animal);
    observable.subscribe(data => {
      console.log(data);
      if(data['errors']) {
        this.errors = data['errors'];
      } else {
        this._router.navigate(["/"]);
      }
    });
  }

}
