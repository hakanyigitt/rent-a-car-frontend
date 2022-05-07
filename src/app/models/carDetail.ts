import { CarImage } from "./carImage";

export interface CarDetail{
    id:number;
    brandName:string;
    colorName:string;
    carName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    carImage:CarImage[];
}