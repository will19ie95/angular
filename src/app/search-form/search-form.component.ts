import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../item.service';

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
    query: "",
    username: "",
    following: true
  };
  constructor(private itemService: ItemService) { }



  ngOnInit() {
  }

  onSearchItems(): void {
    console.log("Search Query: ", this.searchQuery);
  }

}
