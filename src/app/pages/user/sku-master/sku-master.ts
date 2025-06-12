import { Component } from '@angular/core';

import { skuData } from '../../../data/sku-data';

@Component({
  selector: 'app-sku-master',
  standalone: false,
  templateUrl: './sku-master.html',
  styleUrl: './sku-master.css'
})

export class SkuMaster {


  visibleDialog: boolean = false;

  columns!: string[];

  SKU: { [key: string]: string }[] = skuData

  selectedRowData! :{ [key: string]: string };

  ngOnInit() {
    this.columns = Object.keys(this.SKU[0])
  }


  showRowDataDialog(data : any) {
    console.log("click the button")
    this.selectedRowData = data
    this.visibleDialog = true;
  }

}
