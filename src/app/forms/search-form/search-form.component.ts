import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @ViewChild('searchItemsForm') searchItemsForm: NgForm;
  searchQuery = {
    timestamp: "",
    limit: "",
    q: "",
    username: "",
    following: false
  };
  items = [];
  constructor(private itemService: ItemService) { }



  ngOnInit() {
  }

  onSearchItems(): void {
    console.log("Search Query: ", this.searchQuery);

    this.itemService.searchItems(this.searchQuery).subscribe((data) => {
      this.items = data.items;
      this.searchItemsForm.reset();
      this.searchItemsForm.resetForm();
      this.searchQuery = {
        timestamp: "",
        limit: "",
        q: "",
        username: "",
        following: false
      };
    }, (err) => {
      console.error(err);
    });

  }

  onClearItems(): void {
    this.items = [];
  }

}
