import { Component } from '@angular/core';

@Component({
  selector: 'app-sku-master',
  standalone: false,
  templateUrl: './sku-master.html',
  styleUrl: './sku-master.css'
})

export class SkuMaster {

  SKU = [
    {
      skuCode: "KBAFP93847",
      productLine: "Kitchen",
      productCategory: "Base Cabinet",
      productFamily: "Flat Panel",
      productModel: "Shaker",
      dimensions: "600 x 800 x 500 mm",
      material: "MDF",
      finish: "White",
      hardware: "Steel",
      configuration: "Single Door",
      productDescription: "Sleek white base cabinet with flat panel design, offering minimalist aesthetic and efficient storage."
    },
    {
      skuCode: "KBAFP27491",
      productLine: "Kitchen",
      productCategory: "Base Cabinet",
      productFamily: "Flat Panel",
      productModel: "Shaker",
      dimensions: "800 x 800 x 500 mm",
      material: "MDF",
      finish: "White",
      hardware: "Steel",
      configuration: "Single Door",
      productDescription: "800mm wide base cabinet in white, featuring flat panel design that complements modern kitchen interiors."
    },
    {
      skuCode: "KBAFP93847",
      productLine: "Kitchen",
      productCategory: "Base Cabinet",
      productFamily: "Flat Panel",
      productModel: "Shaker",
      dimensions: "600 x 800 x 500 mm",
      material: "MDF",
      finish: "White",
      hardware: "Steel",
      configuration: "Single Door",
      productDescription: "Sleek white base cabinet with flat panel design, offering minimalist aesthetic and efficient storage."
    },
    {
      skuCode: "KBAFP27491",
      productLine: "Kitchen",
      productCategory: "Base Cabinet",
      productFamily: "Flat Panel",
      productModel: "Shaker",
      dimensions: "800 x 800 x 500 mm",
      material: "MDF",
      finish: "White",
      hardware: "Steel",
      configuration: "Single Door",
      productDescription: "800mm wide base cabinet in white, featuring flat panel design that complements modern kitchen interiors."
    },
  ];

}
