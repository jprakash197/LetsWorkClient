import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDetailsComponent } from './read-details.component';

describe('ReadDetailsComponent', () => {
  let component: ReadDetailsComponent;
  let fixture: ComponentFixture<ReadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
