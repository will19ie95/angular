import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService, Item } from '../../services/item.service';

@Component({
  selector: 'app-getitem-form',
  templateUrl: './getitem-form.component.html',
  styleUrls: ['./getitem-form.component.css']
})
export class GetitemFormComponent implements OnInit {

  @ViewChild('getitemForm') getitemForm: NgForm;
  getItemId: string;
  item: Item = {
    username: "",
    content: ""
  };

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onClearItem(): void {
    this.item = {
      username: "",
      content: "",
      timestamp: null
    };
  }

  onGetItem(): void {
    this.itemService.getItem(this.getItemId).subscribe(data => {

      if (data.status === "OK") {
        this.item.username = data.item.username;
        this.item.content = data.item.content;
        this.item.timestamp = data.item.timestamp;
      }

      // reset form
      this.getitemForm.reset();
      this.getitemForm.resetForm();

    }, err => {
      console.error(err);
    });
  }

}
