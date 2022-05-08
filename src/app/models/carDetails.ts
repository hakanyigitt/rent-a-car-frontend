import { CarImage } from "./carImage";

export interface CarDetail{
    carId:number;
    brandId:number;
    colorId:number;
    carImagePath:string[];
    carName:string;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
}