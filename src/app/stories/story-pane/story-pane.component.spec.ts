import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPaneComponent } from './story-pane.component';

describe('StoryPaneComponent', () => {
  let component: StoryPaneComponent;
  let fixture: ComponentFixture<StoryPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
