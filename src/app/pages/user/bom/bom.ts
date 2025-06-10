import { Component } from '@angular/core';

import { downloadCSV } from '../../../utils/download-csv';
import { mainData, childData } from '../../../data/bom-data';

@Component({
  selector: 'app-bom',
  standalone: false,
  templateUrl: './bom.html',
  styleUrl: './bom.css'
})
export class Bom {

  visibleNewBomDialog = false;

  mainDatacolumns!: string[];
  childDataColumns!: string[];

  groupedMainData!: any[];
  groupedChildData!: { [key: string]: any[] };


  ngOnInit() {
    this.groupedDataByParent_SKU();
    this.groupedDataByComponent_ID();

    this.mainDatacolumns = Object.keys(this.groupedMainData[0]).filter( col => col !== 'Primary_Key' )
    this.childDataColumns = Object.keys(childData[0]).filter(col => col !== 'Component_ID')
  }


  // Group main data by Parent_SKU
  groupedDataByParent_SKU() {
    const groupedData = [...mainData].sort((a, b) => a.Parent_SKU.localeCompare(b.Parent_SKU))

    this.groupedMainData = groupedData.map(row => ({
      ...row,
      'Primary_Key': row.Parent_SKU + '_' + row.Component_ID
    })
    )
  }

  // Group child data by Component_ID
  groupedDataByComponent_ID() {
    this.groupedChildData = [...childData].reduce((acc: { [key: string]: any[] }, item) => {
      if (!acc[item.Component_ID]) {
        acc[item.Component_ID] = []
      }
      acc[item.Component_ID].push(item);
      return acc;
    }, {})
  }

  getChildrenForRow(componentId: string): any[] {
    return this.groupedChildData[componentId]
  }


  exportData() {
    downloadCSV(['lalal'])
  }

  showNewBOMDialog(){
    this.visibleNewBomDialog = true;
  }
  print(data: any) {
    console.log(data)
  }
}
