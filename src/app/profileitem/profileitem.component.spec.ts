import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileitemComponent } from './profileitem.component';

describe('ProfileitemComponent', () => {
  let component: ProfileitemComponent;
  let fixture: ComponentFixture<ProfileitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
