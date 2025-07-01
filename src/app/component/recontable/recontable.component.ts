import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  id: string;
  name: string;
  email: string;
  street: any,
  city: string,
  state: any,
  zip: any,
  phone: number,
  website: string
}

const USERS: UserData[] = []


@Component({
  selector: 'app-recontable',
  templateUrl: './recontable.component.html',
  styleUrl: './recontable.component.scss'
})
export class RecontableComponent {
  tabledata: any
  constructor(private _api: ApiService) { }

  
    displayedColumns: string[] = ['cntid', 'wh_mo_id', 'au_ex_id', 'wh_flag', 'Status', 'Survey_Number', 'panel'];
    dataSource = new MatTableDataSource(USERS);
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    // this._api.getData().subscribe((res: any) => {
    //   if (res) {
    //     this.dataSource = res;
    //     console.log(this.dataSource.data);
    //   }
    // });
  }
}
