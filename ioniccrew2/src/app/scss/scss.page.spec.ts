import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScssPage } from './scss.page';

describe('ScssPage', () => {
  let component: ScssPage;
  let fixture: ComponentFixture<ScssPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
