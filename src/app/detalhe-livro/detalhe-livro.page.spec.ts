import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheLivroPage } from './detalhe-livro.page';

describe('DetalheLivroPage', () => {
  let component: DetalheLivroPage;
  let fixture: ComponentFixture<DetalheLivroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheLivroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
