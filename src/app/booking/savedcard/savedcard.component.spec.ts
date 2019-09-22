import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedcardComponent } from './savedcard.component';
import { FormsModule, FormGroup } from '../../../../node_modules/@angular/forms';

describe('SavedcardComponent', () => {
  let component: SavedcardComponent;
  let fixture: ComponentFixture<SavedcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedcardComponent ],
      imports:[FormsModule,FormGroup]
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
