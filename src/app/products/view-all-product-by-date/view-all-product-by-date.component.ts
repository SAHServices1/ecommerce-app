import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-product-by-date',
  templateUrl: './view-all-product-by-date.component.html',
  styleUrls: ['./view-all-product-by-date.component.css']
})
export class ViewAllProductByDateComponent implements OnInit {

  searchDate = '';

  constructor(private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe(data => {
      this.searchDate = data.date;
    })
  }

}
