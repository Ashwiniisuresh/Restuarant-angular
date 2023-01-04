import { Component, OnInit } from '@angular/core';
import { RestaurentApiService } from '../services/restaurent-api.service';

@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.css']
})
export class RestaurentsComponent implements OnInit {

  // restName="Resto cafe cochin"

  restuarantLists:any
  filterString="";

  constructor(private restApi:RestaurentApiService) { }

  ngOnInit(): void {
    // asynchronous fn cll
    this.restApi.allRestaurentList()
    .subscribe((result)=>{
      console.log(result); 
      this.restuarantLists=result
      
    })

    // to get search term from service
    this.restApi.search.subscribe((data)=>{
      this.filterString =data
      console.log(this.filterString);
      
    })
  }

}
