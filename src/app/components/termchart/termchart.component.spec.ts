import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TermchartComponent } from './termchart.component';
import { OncokbService } from './../../services/oncokb.service';

describe('TermchartComponent', () => {
  let component: TermchartComponent;
  let fixture: ComponentFixture<TermchartComponent>;
  let service: OncokbService;

  beforeEach(async(() => {    
    TestBed.configureTestingModule({
      declarations: [ TermchartComponent ],
      imports: [ HttpClientModule ],
      providers:    [ OncokbService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermchartComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(OncokbService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // @TODO add more 
  
});
