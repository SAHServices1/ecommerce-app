import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productID = 0;

  constructor(private ActivatedRout : ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRout.params.subscribe(data => {
      this.productID = data.id;
    })
  }

}
