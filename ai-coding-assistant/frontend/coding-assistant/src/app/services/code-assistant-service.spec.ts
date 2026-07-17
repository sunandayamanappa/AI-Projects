import { TestBed } from '@angular/core/testing';

import { CodeAssistantService } from './code-assistant-service';

describe('CodeAssistantService', () => {
  let service: CodeAssistantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeAssistantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
