import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input("dataSource") dataSource = new MatTableDataSource([])
  @Input("displayedColumns") displayedColumns!: any[];
  columns!: string[];
  dataLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges() {
    this.columns = this.displayedColumns.map(item => item.column);
    this.dataLength = this.dataSource.data.length;
    this.dataSource.paginator = this.paginator;
  }

  onFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
  }

  onRowClick (row: any) {
    console.log("-->", row)
  }

}
