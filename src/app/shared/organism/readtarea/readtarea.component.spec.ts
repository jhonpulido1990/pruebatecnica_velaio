import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadtareaComponent } from './readtarea.component';

describe('ReadtareaComponent', () => {
  let component: ReadtareaComponent;
  let fixture: ComponentFixture<ReadtareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReadtareaComponent]
    });
    fixture = TestBed.createComponent(ReadtareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
