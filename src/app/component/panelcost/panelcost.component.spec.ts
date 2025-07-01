import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelcostComponent } from './panelcost.component';

describe('PanelcostComponent', () => {
  let component: PanelcostComponent;
  let fixture: ComponentFixture<PanelcostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelcostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
