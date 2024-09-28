import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateListtareaComponent } from './template-listtarea.component';

describe('TemplateListtareaComponent', () => {
  let component: TemplateListtareaComponent;
  let fixture: ComponentFixture<TemplateListtareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TemplateListtareaComponent]
    });
    fixture = TestBed.createComponent(TemplateListtareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
