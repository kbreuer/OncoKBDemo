import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { VarianttableComponent } from './varianttable.component';
import { TermchartComponent } from './../termchart/termchart.component';
import { OncokbService } from './../../services/oncokb.service';

describe('VarianttableComponent', () => {
  let component: VarianttableComponent;
  let fixture: ComponentFixture<VarianttableComponent>;
  let service: OncokbService;
  let dataSource: MatTableDataSource<any[]>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarianttableComponent, MockNavComponent ],
      imports: [ HttpClientModule, FormsModule, BrowserAnimationsModule,
                  MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatProgressSpinnerModule ],
      providers: [ OncokbService, TermchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarianttableComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(OncokbService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // @TODO add more 
  
});

@Component({
  selector: 'app-termchart',
  template: ''
})
class MockNavComponent {
}
