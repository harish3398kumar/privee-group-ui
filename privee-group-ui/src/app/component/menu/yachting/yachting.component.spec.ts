import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtingComponent } from './yachting.component';

describe('YachtingComponent', () => {
  let component: YachtingComponent;
  let fixture: ComponentFixture<YachtingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YachtingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(YachtingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
