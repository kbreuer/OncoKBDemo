/**
 * OncoKB App NgModule
 *
 * Imports modules to retrieve data from a REST service
 * and display it in a datatable, with filtering, sorting, and pagination.
 *
 * @author Karin Breuer
 * @date 12/24/2017
 *
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { VarianttableComponent } from './components/varianttable/varianttable.component';
import { OncokbService } from './services/oncokb.service';
import { ErrorInterceptorProvider } from './services/errorinterceptor';
import { TermchartComponent } from './components/termchart/termchart.component';

@NgModule({
  declarations: [
    AppComponent,
    VarianttableComponent,
    TermchartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatProgressSpinnerModule
  ],
  providers: [
    OncokbService, TermchartComponent, ErrorInterceptorProvider,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule {}
