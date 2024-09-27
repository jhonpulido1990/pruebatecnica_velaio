import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTareaComponent } from './template-tarea.component';

describe('TemplateTareaComponent', () => {
  let component: TemplateTareaComponent;
  let fixture: ComponentFixture<TemplateTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TemplateTareaComponent]
    });
    fixture = TestBed.createComponent(TemplateTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
