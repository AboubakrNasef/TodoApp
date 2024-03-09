import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDialogComponent } from './app-dialog.component';

describe('AppDialogComponent', () => {
  let component: AppDialogComponent;
  let fixture: ComponentFixture<AppDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDialogComponent]
    });
    fixture = TestBed.createComponent(AppDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
