import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-getitem-form',
  templateUrl: './getitem-form.component.html',
  styleUrls: ['./getitem-form.component.css']
})
export class GetitemFormComponent implements OnInit {

  @ViewChild('getitemForm') getitemForm: NgForm;
  getItemId = "";

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onGetItem(): void {
    this.itemService.getItem(this.getItemId).subscribe(data => {
      // console.log("got item data ", data);
      this.getitemForm.reset();
      this.getitemForm.resetForm();
    }, err => {
      console.error(err);
    });
  }

}
