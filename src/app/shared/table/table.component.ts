import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,  MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input("dataSource") dataSource = new MatTableDataSource([])
  @Input("displayedColumns") displayedColumns: string[] = [];
  dataLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnChanges() {
    this.dataLength = this.dataSource.data.length;
    this.dataSource.paginator = this.paginator;
  }

}
