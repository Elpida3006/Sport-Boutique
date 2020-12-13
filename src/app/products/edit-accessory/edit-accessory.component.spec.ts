import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccessoryComponent } from './edit-accessory.component';

describe('EditAccessoryComponent', () => {
  let component: EditAccessoryComponent;
  let fixture: ComponentFixture<EditAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccessoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
