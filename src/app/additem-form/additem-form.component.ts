import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { User } from '../user';
import { Item } from '../item';
import { AuthService } from '../auth.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-additem-form',
  templateUrl: './additem-form.component.html',
  styleUrls: ['./additem-form.component.css']
})
export class AdditemFormComponent implements OnInit {

  @ViewChild('additemForm') additemForm: NgForm;
  addItem: Item = {
    username: this.auth.getUserDetails().username,
    content: ""
  };

  constructor(private auth: AuthService, private itemService: ItemService) { }

  ngOnInit() {
  }

  onAddItem(): void {
    this.itemService.addItem(this.addItem).subscribe(data => {
      console.log("add item data ", data);
      // reset form
      this.additemForm.reset();
      this.additemForm.resetForm();
    }, err => {
      console.error(err);
    });
  }
}
