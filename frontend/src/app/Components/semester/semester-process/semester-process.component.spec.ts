import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterProcessComponent } from './semester-process.component';

describe('SemesterProcessComponent', () => {
  let component: SemesterProcessComponent;
  let fixture: ComponentFixture<SemesterProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemesterProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemesterProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
