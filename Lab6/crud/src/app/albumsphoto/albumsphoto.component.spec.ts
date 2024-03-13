import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsphotoComponent } from './albumsphoto.component';

describe('AlbumsphotoComponent', () => {
  let component: AlbumsphotoComponent;
  let fixture: ComponentFixture<AlbumsphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsphotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumsphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
