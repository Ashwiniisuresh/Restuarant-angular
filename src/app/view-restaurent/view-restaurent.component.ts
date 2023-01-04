import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurentApiService } from '../services/restaurent-api.service';

@Component({
  selector: 'app-view-restaurent',
  templateUrl: './view-restaurent.component.html',
  styleUrls: ['./view-restaurent.component.css']
})
export class ViewRestaurentComponent implements OnInit {


  restId:any
  restBody:any
  constructor(private activatedRoute:ActivatedRoute,
    private restService:RestaurentApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.restId = data['id']

      
    })
    // api call
    this.restService.viewRestaurent(this.restId)
    .subscribe((result)=>{
      this.restBody =result
      console.log( this.restBody);
      
      
    })
  }

}