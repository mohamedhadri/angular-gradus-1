import { Component, OnInit } from '@angular/core';
 
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
 import {ELEMENT_DATA} from "./myTable"
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})


export class TableDataComponent implements OnInit {
  


  public displayedColumns = ['symbol','position', 'name', 'weight', '#'];
  dataSource = ELEMENT_DATA;
  public settings: Settings;
  
  // constructor(public appSettings:AppSettings, private tablesService:TablesService) {
  //   this.settings = this.appSettings.settings; 
  //   this.dataSource = new MatTableDataSource<Element>(this.tablesService.getData());
  // }



  constructor() { }

  ngOnInit(): void {
  }

  
}
