import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurentApiService {

  search= new BehaviorSubject("")


  constructor(private api:HttpClient) { }

  // get all restaurent details Api call
  allRestaurentList(){
   return this.api.get('http://localhost:3000/restaurants')
    
  }
  // get only user requested restaurant
  viewRestaurent( restId:any){
   return this.api.get('http://localhost:3000/restaurants/'+ restId)
    

  }

  // add a  new restaurent api
  addRestaurent(restBody:any){
    return this.api.post('http://localhost:3000/restaurants/',restBody)
  }

  // update perticular Restuarant
  updateRestuarant(restId:any,restBody:any){
    return this.api.put('http://localhost:3000/restaurants/'+restId,restBody)
  }
  // delete perticular Restuarant
    deleteRestuarant(restId:any){
      return this.api.delete('http://localhost:3000/restaurants/'+restId)

    }
}
