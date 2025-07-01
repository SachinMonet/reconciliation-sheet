import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconcilTablrComponent } from './reconcil-tablr.component';

describe('ReconcilTablrComponent', () => {
  let component: ReconcilTablrComponent;
  let fixture: ComponentFixture<ReconcilTablrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReconcilTablrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReconcilTablrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
