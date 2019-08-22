import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  animal : any = {};
  errors : any = {};

  constructor(
    private _http : HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(params._id);
      let observable = this._http.getOneAnimal(params._id);
      observable.subscribe(data => {
        this.animal = data;
      });
    });
  }

  updateAnimal() {
    let observable = this._http.updateAnimal(this.animal._id, this.animal);
    observable.subscribe(data => {
      if(data['errors']) {
        this.errors = data['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }
}
