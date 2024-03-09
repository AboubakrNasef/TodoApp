import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemPatchComponent } from './todo-item-patch.component';

describe('TodoItemPatchComponent', () => {
  let component: TodoItemPatchComponent;
  let fixture: ComponentFixture<TodoItemPatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemPatchComponent]
    });
    fixture = TestBed.createComponent(TodoItemPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
