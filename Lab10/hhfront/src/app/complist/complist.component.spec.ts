import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplistComponent } from './complist.component';

describe('ComplistComponent', () => {
  let component: ComplistComponent;
  let fixture: ComponentFixture<ComplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
