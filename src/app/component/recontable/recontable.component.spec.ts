import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecontableComponent } from './recontable.component';

describe('RecontableComponent', () => {
  let component: RecontableComponent;
  let fixture: ComponentFixture<RecontableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecontableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
