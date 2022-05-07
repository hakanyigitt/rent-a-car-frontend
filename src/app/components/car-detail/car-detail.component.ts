import { CarDetailDto } from './../../models/carDetailDto';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './../../services/car.service';
import { CarImage } from './../../models/carImage';
import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';

@Component({
  selector: 'app-cardetail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
 carDetails:CarDetail[]=[];
 carImages:CarImage[];
 carId:number;
 imgUrl:string="http://localhost:2786/Images/"
 isRentDate:boolean;
 isReturnDate:boolean;

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
        this.carId=(params["carId"]);
        this.getCarDetails(params["carId"])
      }
    })
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(response=>{
      this.carDetails=response.data;
      this.carImages=this.carDetails[0].carImage;
    })
  }

  getCurrentImageClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  getButtonClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'active';
    } else {
      return '';
    }
  }

  rentCar(carDetailDto:CarDetailDto){
    if(this.isRentDate&&this.isReturnDate){
      this.rentCar(carDetailDto);
    }
    else{
      
    }
  }
}