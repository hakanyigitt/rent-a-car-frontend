import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: CarDetailDto[] = [];
  carDetail:CarDetail;
  imgUrl ="https://localhost:44368/Images/"
  currentCar:CarDetailDto;
  defaultImage="";
  carFilter="";
  colorFilter="";
  brandFilter="";
  dataLoaded = false;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarsByBrand(params["id"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByBrand(id:number){
    this.carService.getCarsByBrand(id).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByColor(id:number){
    this.carService.getCarsByColor(id).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  setCurrentCar(carDetailDto:CarDetailDto){
    this.currentCar=carDetailDto;
  }
}
