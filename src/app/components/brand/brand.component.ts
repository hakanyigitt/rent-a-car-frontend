import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded = false;
  kontrol:number = 0;
  currentBrand:Brand;

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.dataLoaded = true;
    })
  }

  setCurrentBrand(brand: Brand){
    this.currentBrand = brand;
    this.kontrol = 0;
  }

  setAllCurrentBrand(){
    this.currentBrand = {id: -1, name:""}
    this.kontrol = 1;
  }

  getCurrentBrandClass(brand: Brand){
    if(brand == this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllBrandClass(){
    if((!this.currentBrand) || this.kontrol){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  
}
