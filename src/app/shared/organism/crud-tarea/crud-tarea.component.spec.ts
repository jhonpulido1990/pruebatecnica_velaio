import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTareaComponent } from './crud-tarea.component';

describe('CrudTareaComponent', () => {
  let component: CrudTareaComponent;
  let fixture: ComponentFixture<CrudTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CrudTareaComponent]
    });
    fixture = TestBed.createComponent(CrudTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
