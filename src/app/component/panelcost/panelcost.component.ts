import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';


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
  successToExcel(): void {
    let table = this.tables?.nativeElement;
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

}
