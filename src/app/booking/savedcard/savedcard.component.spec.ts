import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedcardComponent } from './savedcard.component';

describe('SavedcardComponent', () => {
  let component: SavedcardComponent;
  let fixture: ComponentFixture<SavedcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedcardComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
