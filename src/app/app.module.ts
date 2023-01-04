import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurentsComponent } from './restaurents/restaurents.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewRestaurentComponent } from './view-restaurent/view-restaurent.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { FormsModule } from '@angular/forms';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { DeleteResturantComponent } from './delete-resturant/delete-resturant.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RestaurentsComponent,
    HeaderComponent,
    FooterComponent,
    ViewRestaurentComponent,
    AddComponentComponent,
    UpdateRestuarantComponent,
    DeleteResturantComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
