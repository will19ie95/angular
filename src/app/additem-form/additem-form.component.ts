import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { User } from '../user';
import { Item } from '../item';
import { AuthService } from '../auth.service';
import { ItemService } from '../item.service';
import { MessageService } from '../message.service';

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

  constructor(private auth: AuthService, private itemService: ItemService, private messageService: MessageService) { }

  ngOnInit() {
  }

  onAddItem(): void {
    this.itemService.addItem(this.addItem).subscribe(data => {
      console.log("add item data ", data);
      const message = {
        severity: "",
        summary: "",
      };
      if (data.status === "OK") {
        message.severity = "success";
        message.summary = data.message;
      } else if (data.status === "error") {
        message.severity = "error";
        message.summary = data.message;
      }
      this.messageService.add(message);
      // reset form
      this.additemForm.reset();
      this.additemForm.resetForm();
    }, err => {
      console.error(err);
    });
  }
}
