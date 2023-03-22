import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauhistoComponent } from './tableauhisto.component';

describe('TableauhistoComponent', () => {
  let component: TableauhistoComponent;
  let fixture: ComponentFixture<TableauhistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauhistoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauhistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
