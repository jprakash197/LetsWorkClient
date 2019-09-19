import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { fromStringWithSourceMap } from '../../../../node_modules/@types/source-list-map';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // checks necessary function is available
  it('should have onSelect function',
    inject([SignupComponent], (signup: SignupComponent) => {
      expect(signup.onSelect).toBeTruthy();
    }));
  // check form inputs are valid/invalid
  it ('form should be invalid',
  inject([SignupComponent], (signup: SignupComponent) => {
    signup.username = null;
    signup.password = null;
    signup.confirmpassword = null;
    signup.email = null;
    signup.realname = null;
  }));
  // check that the service is running
  // check that output is not null
  // check that items are being saved in localstorage

});
