import { TestBed } from '@angular/core/testing';

import { EditoraService } from './editora.service';

describe('EditoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditoraService = TestBed.get(EditoraService);
    expect(service).toBeTruthy();
  });
});
