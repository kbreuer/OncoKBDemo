/**
 * Component for displaying a datatable with gene variant information for a given Entrez Gene ID
 * Uses a datasource fed by http get retrieval service
 *
 * @author Karin Breuer
 * @date 12/24/2017
 *
 */
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatInput, MatButton, MatProgressSpinner } from '@angular/material';

import { Variant } from '../../models/variant';
import { OncokbService } from '../../services/oncokb.service';
import { TermchartComponent } from '../termchart/termchart.component';

@Component({
  selector: 'app-varianttable',
  templateUrl: './varianttable.component.html',
  styleUrls: ['./varianttable.component.css']
})
export class VarianttableComponent implements OnInit, AfterViewInit {
  title = 'OncoKB Variant Display';
  displayedColumns = ['alteration', 'hugo', 'entrez', 'oncoOrTsg'];
  resultLength = 0;
  service: OncokbService;
  variants: Variant[];
  entrezGeneId: number;
  error = '';
  loading = true;
  
  // load data source for table and assign paginator and sort
  dataSource = new MatTableDataSource<Variant>(this.variants);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Constructor with data retrieval service and linked component for plotting retrieved data
   */
  constructor(private oncokbService: OncokbService, private termChartComp: TermchartComponent ) {
    this.service = oncokbService;
    this.entrezGeneId = 673;
   }

  ngOnInit() {
    this.loadVariants();
  }

  /**
   * Set paginator and sort
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.dataSource.sort != null) {
      this.dataSource.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    }
  }

  /**
   * Apply a string filter to the retrieved data
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Trigger data retrieval for given Entrez Gene ID
   */
  getByEntrezGeneId() {
    this.dataSource.filter = '';
    // @TODO clear the input element too
    this.error='';
    this.loading = true;
    this.loadVariants();
  }

  /**
   * Helper function to determine whether to display OncoGene/TSG column
   */
  isOncogeneOrTsg(): boolean {
    return this.variants[0].gene.oncogene || this.variants[0].gene.tsg;
  }

  /**
   * Helper function to assign data to datasource and trigger plotting of the retrieved data
   */
  loadVariants() {
    this.service.getVariants(this.entrezGeneId)
      .subscribe(variants => {
        this.variants = variants;
        this.dataSource.data = Array.from(this.variants);
        this.resultLength = (this.dataSource != null && this.dataSource.data != null) ? this.dataSource.data.length : 0;
        this.loading = false;
      },
      err => this.error = err);
    // @TODO improve error handling & messaging
    this.termChartComp.plot();
  }

}
