import { Component } from '@angular/core';


import { supplierData } from '../../../data/supplier-data';
import { downloadCSV } from '../../../utils/download-csv';

@Component({
  selector: 'app-suppiler-master',
  standalone: false,
  templateUrl: './suppiler-master.html',
  styleUrl: './suppiler-master.css'
})
export class SuppilerMaster {


  visibleDialog: boolean = false;
  visibleAddSupplierDialog = false;
  
    columns!: string[];
    
    supplier: { [key: string]: any }[] = supplierData
  
    selectedRowData! :{ [key: string]: string };
  
    ngOnInit() {
      this.columns = Object.keys(this.supplier[0])
    }
  
  
    showRowDataDialog(data : any) {
      this.selectedRowData = data
      this.visibleDialog = true;
    }

    showAddSupplierDialog(){
      this.visibleAddSupplierDialog = true;
    }
  
    exportData(){
      downloadCSV(this.supplier)
    }


}
