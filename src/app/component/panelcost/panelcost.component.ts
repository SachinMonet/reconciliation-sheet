import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-panelcost',
  templateUrl: './panelcost.component.html',
  styleUrls: ['./panelcost.component.scss']
})
export class PanelcostComponent {

  @ViewChild('myTable') table: ElementRef | undefined;
  @ViewChild('myTables') tables: ElementRef | undefined;
  @Input() allData: any
  @Input() response_ids: any
  @Input() survey_number: any
  @Input() loader: boolean
  header: any;
  subheader: any;
  successnum: any;


  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.header = [this.allData[0].study_name, 'Campaign name', 'success', 'bad case', 'overQuota', 'total',]
    this.subheader = ['Sample', 'Cost', 'Sample', 'Cost', 'Sample', 'Cost', 'Sample', 'Cost']
    this.successnum = ['Success Number', 'Success ID']
  }

  exportToExcel(): void {
    console.log(this.response_ids)
    let table = this.table?.nativeElement;
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table)
    const workbook: XLSX.WorkBook = {
      Sheets: { 'Campaign Data': worksheet },
      SheetNames: ['Campaign Data']
    };

    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });

    const blobData = new Blob([excelBuffer], {
      type: 'application/octet-stream'
    });

    FileSaver.saveAs(blobData, 'campaign_data.xlsx');
  }
  // successToExcel(): void {
  //   let table = this.tables?.nativeElement;
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table)
  //   const workbook: XLSX.WorkBook = {
  //     Sheets: { 'Campaign Data': worksheet },
  //     SheetNames: ['Campaign Data']
  //   };

  //   const excelBuffer: any = XLSX.write(workbook, {
  //     bookType: 'xlsx',
  //     type: 'array'
  //   });

  //   const blobData = new Blob([excelBuffer], {
  //     type: 'application/octet-stream'
  //   });

  //   FileSaver.saveAs(blobData, 'campaign_data.xlsx');
  // }

  successToExcel(): void {
  // Get the full rendered table reference
  const tableEl = this.tables?.nativeElement;
  if (!tableEl) {
    console.error('No table element available for export');
    return;
  }

  // Convert HTML table to SheetJS worksheet, ensuring all rows are included
  const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(tableEl, {
    sheetRows: 0,    // 0 means include all rows
    display: false   // false means include rows even if hidden via CSS
  });

  const workbook: XLSX.WorkBook = {
    Sheets: { 'Campaign Data': worksheet },
    SheetNames: ['Campaign Data']
  };

  // Write workbook into a binary array
  const excelBuffer: any = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
    cellStyles: false  // omit styling if not needed
  });

  // Create a Blob and trigger download
  const blobData = new Blob([excelBuffer], {
    type: 'application/octet-stream'
  });
  saveAs(blobData, 'campaign_data.xlsx');
}

}
