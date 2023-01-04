import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurentApiService } from '../services/restaurent-api.service';

@Component({
  selector: 'app-delete-resturant',
  templateUrl: './delete-resturant.component.html',
  styleUrls: ['./delete-resturant.component.css']
})
export class DeleteResturantComponent implements OnInit {

  restId:any
  constructor(private activatedRoute:ActivatedRoute,
    private apiService:RestaurentApiService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (data)=> {
        this.restId = data['id']
        console.log(this.restId);
      
      }
    )
      this.apiService.deleteRestuarant(this.restId)
      .subscribe(()=>{
        alert('RequestedRestuarant details aredelted successfully!!!')
        this.router.navigateByUrl('')
      })


  }

}
