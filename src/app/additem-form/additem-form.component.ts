import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Http } from '@angular/http';

@Component({
  selector: 'app-additem-form',
  templateUrl: './additem-form.component.html',
  styleUrls: ['./additem-form.component.css']
})
export class AdditemFormComponent implements OnInit {

  @ViewChild('additemForm') additemForm: NgForm;
  item = {};
  // item: User = {};

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onAddItem(): void {
    const req = this.http.post('/api/additem', this.item).subscribe(res => {
      res.json();
      console.log(res.json());
    }, err => {
      console.log("Error, Could not add item", this.item, err);
    });
  }

}
