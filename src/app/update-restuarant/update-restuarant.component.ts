import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurentApiService } from '../services/restaurent-api.service';

@Component({
  selector: 'app-update-restuarant',
  templateUrl: './update-restuarant.component.html',
  styleUrls: ['./update-restuarant.component.css']
})
export class UpdateRestuarantComponent implements OnInit {
  id:any
  rName:any
  neighborhood:any
  photograph:any
  Monday:any
  Tuesday:any
  Wednesday:any
  Thursday:any
  Friday:any
  Saturday:any
  Sunday:any
  address:any
  lat:any
  lng:any
  cuisine_type:any
  rvname:any
  date:any
  rating:any
  comments:any
  reviewArray:any = []

  restId:any
  restBody:any
  reviews:any
  constructor(private activatedRoute:ActivatedRoute,
    private restService:RestaurentApiService,private router:Router)  { }

  ngOnInit(): void {
    // get restaurant id
    this.activatedRoute.params.subscribe((data)=>{
      this.restId = data['id']

  })
  // get restaurant details
  this.restService.viewRestaurent(this.restId)
  .subscribe((result)=>{
    this.restBody =result
    console.log( this.restBody);
    
    
  })

}
updateRestuarant(form:any){
    let updateRestuarant={
      id:parseInt(form.value.id),
      name:form.value.rName,
      neighborhood:form.value.neighborhood,
      photograph:form.value.photograph,
      address:form.value.address,
      latlng:{
        lat:form.value.lat,
        lng:form.value.lng
      },
      cuisine_type:form.value.cuisine_type,
      operating_hours:{
        Monday:form.value.Monday,
        Tuesday:form.value.Tuesday,
        Wednesday:form.value.Wednesday,
        Thursday:form.value.Thursday,
        Friday:form.value.Friday,
        Saturday:form.value.Saturday,
        Sunday:form.value.Sunday
    
      },
      reviews:[
        {
        name:form.value.rvname,
        date:form.value.date,
        rating:parseInt(form.value.rating),
        comments:form.value.comments
      }
      ]
      
     }   
     console.log(updateRestuarant);
     this.restService.updateRestuarant(this.restId,updateRestuarant)
     .subscribe((data)=>{
      alert('Restaurant details updated sucessfully!!!')
      this.router.navigateByUrl('')
     })
      
  }
}
