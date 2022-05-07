import { CarImage } from "./carImage";

export interface CarDetailDto{
    id:number;
    brandId:number;
    colorId:number;
    carName:string;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    carImage:CarImage[];
}