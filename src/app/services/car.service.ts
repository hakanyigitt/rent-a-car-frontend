import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { CarDetail } from '../models/carDetail';
import { CarDetailDto } from '../models/carDetails';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
    providedIn: 'root'
})

export class CarService{

    apiUrl = "https://localhost:44368/api/";

    constructor(private httpClient: HttpClient){}

    getCars():Observable<ListResponseModel<CarDetailDto>>{
        let newPath = this.apiUrl + "cars/getcardetaildtos"
        return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
    }

    getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
        let newPath = this.apiUrl+"cars/getcarbybranddetaildtos?brandId="+brandId
        return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
    }

    getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
        let newPath = this.apiUrl+"cars/getcarbycoloriddetaildtos?colorId="+colorId;
        return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
    }
    getCarDetails(carId: number): Observable<ListResponseModel<CarDetail>> {
        let newPath = this.apiUrl + 'cars/getcardetailsbycarid?carid=' + carId;
        return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
      }
    
      getCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
        let newPath = this.apiUrl+"carimages/getbycarid?carId="+carId;
        return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
      }

}