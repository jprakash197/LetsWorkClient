import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileComponent } from './update-profile.component';
import { UserProfileRoutingModule } from '../user-profile-routing.module';

describe('UpdateProfileComponent', () => {
  let component: UpdateProfileComponent;
  let fixture: ComponentFixture<UpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProfileComponent],
      imports: [UserProfileRoutingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
