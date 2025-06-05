import { Component } from '@angular/core';

import { skuData } from '../../../data/sku-data';

@Component({
  selector: 'app-sku-master',
  standalone: false,
  templateUrl: './sku-master.html',
  styleUrl: './sku-master.css'
})

export class SkuMaster {


  columns! : string[];

  SKU : { [key: string]: string }[]= skuData


  ngOnInit(){
    this.columns = Object.keys(this.SKU[0])
  }


}
